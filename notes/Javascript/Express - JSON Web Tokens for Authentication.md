### Bcrypt installation 

Install Bcrypt 
```shell
$ npm install bcrypt
```

Import brypt -- within the model where this is used (eg: user model)
```javascript 
import bcrypt from "bcrypt";
```


### Hashing Password 
Within the Model  -- bcrypt.hash (password, work-factor)
- bcrypt is async bc it takes time to hash something 
- Within **user registration use case**, hashing is done upon register 

models/users.js
```javascript

 /** Register user with data.
   *
   * Returns { username }
   **/

  static async register(username, pwd) {
    const hpwd = await bcrypt.hash(pwd, BCRYPT_WORK_FACTOR);
    const result = await db.query(
      `INSERT INTO users 
           (username, password)
         VALUES ($1, $2)
         RETURNING username`,
      [username, hpwd]);

    return result.rows[0];
  }
```

Routes/ auth.js 
```javascript
/** Register user.
 *   {username, password} => {username}
 **/

router.post("/register",
  async function (req, res, next) {
    if (req.body === undefined) {
      throw new BadRequestError();
    };

	//Calling User.register method 
    const username = await User.register(
      req.body.username,
      req.body.password
    );

    return res.json(username);
  });
```

### Password Validation 

- Logging in use case 

Routes/ auth.js 
```javascript 

/** Login: returns {message}. */

router.post("/login-1",
      async function (req, res) {
  if (!req.body) {
    throw new BadRequestError();
  }

  const { username, password } = req.body;
  await User.login(username, password);

  return res.json(
    { message: "Logged in!" });
});
```

models/users.js
```javascript

 /** Authenticate with username, pwd
   *  - Returns { password }
   *  - or UnauthorizedError
   */

  static async login(username, pwd) {
    const result = await db.query(
      `SELECT password
         FROM users
         WHERE username = $1`,
      [username]);
    const user = result.rows[0]; //check if user is there 

    if (user && (await bcrypt.compare(pwd, user.password) === true)){
	    return user;
    } 
    //IMPORTANT: a promise is truthy so it is important to check === true. This would be a bug bc the authenticatino check wouldn't be happening if the await was accidentally removed or forgotten. 
    
    throw new UnauthorizedError(
      "Invalid username/password");
  }
```

## Authentication via Tokens 
1. make request with username/password to AJAX login route 
2. server authenticates and returns token in JSON 
	- token is encoded and signed with JSON web token standard 
		- tokens are tamper-evident BUT not secret 
3. front end JS receives token and stores within localStorage 
4. For all future requests, send the token in the request (JS, Insomnia)
	- Server gets token from request and validates token 


# JSON Web Tokens 
consists of 3 parts 

- **Header:** metadata about token _(signing algorithm used & type of token)_
- **Payload:** data to be stored in token, must be an object
    - Often, this will store things like the user ID
    - This is _encoded_, not _encrypted_ — don’t put secret info here!
- **Signature:** header & payload, signed with secret key

To decode an encoded string, use built in javascript function `atob("str to decode")`
```javascript 

atob("eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ")

// '{"sub":"1234567890","name":"John Doe","iat":1516239022}'
```

**Only thing we need to supply to JWT is the payload** 

## Install 
```shell
npm install jsonwebtoken
```

## Create Token 

```javascript 

//THESE ARE THE PARTS THAT ARE NEEEDED BUT DO NOT BELONG ON SAME PAGE 

import jwt from "jsonwebtoken";

const SECRET_KEY = "oh-so-secret";

const payload = {username: "jane"};
const token = jwt.sign(payload, SECRET_KEY); 
```


## Verify Token 
- **USE `jwt.verify` NOT `jwt.decode`** 
	- `jwt.decode` is very risky bc anyone can login without a SECRET_KEY
- **This will decode and verify** 
`jwt.verify(token, secret-key)`
- Verify token signature and return payload is valid. If not, raise error.

```javascript
jwt.verify(token, SECRET_KEY);   // {username: "jane"}
```


# Putting it all together 


routes/auth.js
```javascript 

/** (Fixed) Login: returns JWT on success. */

router.post("/login", async function (req, res, next) {
  if (req.body === undefined) throw new BadRequestError();

  const { username, password } = req.body;
//authenticates the user and returns the username 
  await User.login(username, password);

//server creates the token using jwt.sign function that takes username and secret key 
  const token = jwt.sign({ username }, SECRET_KEY);  
// returns json token to the user, which can be stored locally 
  return res.json({ token });
});
```



## Using Middleware to Authenticate 

middleware/auth.js 
```javascript 

/** Auth JWT token, add auth'd user (if any) to res. */

function authenticateJWT(req, res, next) {
  try {
    //get token from either query string or req body 
    // remember - GET requests only have query string 
    const tokenFromRequest = req.query?._token || req.body?._token;
    
	//jwt.verify will raise error if not verified (no token or invalid token). if there's error, will go into "catch" condition 
    const payload = jwt.verify(tokenFromRequest, SECRET_KEY);
    
    //save the payload on the response object within locals key 
    res.locals.user = payload; //~ "saving on g in flask"
    
    return next();
    
  } catch (err) {
    // error in this middleware isn't error -- continue on
    return next();
  }
}
```


![[Screenshot 2024-05-20 at 2.10.01 PM.png]]


**Add to app.js so that authenticate is used on all routes**

app.js
```javascript 

import express from "express";
import authRoutes from "./routes/auth.js";
import { NotFoundError } from "./expressError.js";
import { authenticateJWT } from "./middleware/auth.js";

const app = express();

app.use(express.json());

app.use(authenticateJWT);
```


### Using Middleware to Authorize 

**Use Case: Ensure user is logged in:** 

middleware.js 
```javascript 
/** Require user or raise 401 */

function ensureLoggedIn(req, res, next) {

	const user = res.locals.user;
		if (user && user.username) {
		return next();
	}
	throw new UnauthorizedError();
}
```

**Don't put Authorize middleware on ALL routes.** 
- blocks register / login routes 

routes/auth.js 
```javascript 

/** Secret: must be logged in */
router.get("/secret",
	ensureLoggedIn,
	function (req, res, next) {
		return res.json(
			{ message: "Made it!" });
});
```


**Use Case: Ensure user is admin**

middleware.js
```javascript
function ensureAdmin(req, res, next) {
	const user = res.locals.user;
		if (user && user.username === "admin") {
			return next();

}
throw new UnauthorizedError();
}
```

routes/auth.js 
```javascript
/** Secret-admin: only admins */
router.get("/secret-admin",
	ensureAdmin,
	async function (req, res, next) {
		return res.json(
			{ message: "Made it!" });
});
```


# How to Test with Tokens 

**see rithm > Node Express > demos > express-jwt-demo > auth.test.js** 

```javascript

let testUserToken;
let testAdminToken;

beforeEach(async function () {
  await db.query("DELETE FROM users");
  const hashedPwd = await bcrypt.hash("secret", BCRYPT_WORK_FACTOR);
  await db.query(
      `INSERT INTO users VALUES
      ('test', $1)`, [hashedPwd]);
  await db.query(
      `INSERT INTO users VALUES
      ('admin', $1)`, [hashedPwd]);

  // we'll need tokens for future requests
  const testUser = { username: "test" };
  const testAdmin = { username: "admin" };
  testUserToken = jwt.sign(testUser, SECRET_KEY);
  testAdminToken = jwt.sign(testAdmin, SECRET_KEY);
});
```


```javascript

describe("GET /secret success", function () {
  test("returns 'Made it'", async function () {
    const response = await request(app)
        .get(`/secret`)
        .query({ _token: testUserToken }); //send a token with test request AND proves logged in user gets here 
        
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({ message: "Made it!" });
  });
});

describe("GET /secret failure", function () {
  test("returns 401 when logged out", async function () {
    const response = await request(app)
        .get(`/secret`); // no token being sent!
    expect(response.statusCode).toEqual(401);
  });

  test("returns 401 with invalid token", async function () {
    const response = await request(app)
        .get(`/secret`)
        .query({ _token: "garbage" }); // invalid token!
    expect(response.statusCode).toEqual(401);
  });
});
```


## Creating Seed file with Bcrypt 
1. npm i bcrypt 
2. node 
3. cont bcrypt = await import ("bcrypt")
4. await bcrypt.hash("password",1)
	1. insert the hashed password into the db 