# Setup Steps

## **No Starter Code** 
1. clone the repo:
	1. **NODE PROJECT:** `degit rithmschool/start/js/node [project name]
	2. **EXPRESS PROJECT:** `degit rithmschool/start/js/express [project name ]`
2. . `npm install`

## **Starter Code Given** 
1. `npm install`

- **if there is starter code, just start at npm install** 
	- **bc there is a package json that contains everything i need** (this is like requirements.txt in python)

### **To install middleware:** 
- install it - npm install morgan
- import it - `import morgan from "morgan";`
- use it - `app.use(morgan('dev'));`

### **To install integration tester:** 
- `npm i --save-dev supertest`
	- `--save-dev` is used to separate what installations the developer needs vs what the server needs 


# How to start up server 

`node --watch server.js `


## server.js
```shell
import express from "express";

const app = express();

app.listen(3000, function () {
  console.log("App started at http://localhost:3000/");
});
```


## app.js  
```javascript
import express from "express";

const app = express();

/** Make dogs bark. */

app.get("/dogs", function (req, res) {
  return res.send("Dogs go brk brk");
});
```

- **req:** request object (query string, url params, form data)
- **res:** response object (methods for returning html, text, json)
-  `res.send("...")` issues response of text or HTML

ROUTE ORDER MATTERS 

### Route Methods 
- `app.get(path, callback)`
- `app.post(path, callback)`
- `app.put(path, callback)`
- `app.patch(path, callback)`
- `app.delete(path, callback)`
- `app.all(path, callback)`


# Setup Express App

```shell
> degit rithmschool/start/js/express [proj_name]
> npm install 
> 
```

1. double check node_modules file is in the directory 
2. import express in app.js 
3. export the app from app.js 
4. import app.js into server.js 
5. start app with `node server.js` (equivalent of flask run)

app.js 
```javascript 
/** Simple demo Express app. */
import express from "express";
const app = express();

// process JSON body => req.body
app.use(express.json());

// process traditional form data => req.body
app.use(express.urlencoded());

/** Homepage renders simple message. */
app.get("/", function (req, res) {
  return res.send("Hello World!");

export default app;
```

server.js
```javascript 
import app from "./app.js";

app.listen(3000, function () {
  console.log(
      "Started http://localhost:3000/");
});
```


## Error Handling 
- Rithm made custom errors: within **express-intro-demo**, copy the expressError.js file into own project 
- import the error I want: `import { NotFoundError } from "./expressError.js";` 

### How to return errors as generic HTML 
- Put at bottom of page when no route matches in app.js 
```
/** 404 handler: matches unmatched routes. */
app.use(function (req, res) {
  throw new NotFoundError();
});
```

### How to return errors as JSON 
This goes at the bottom of the file - app.js 
```javascript 
/** Error handler: logs stacktrace and returns JSON error message. */
app.use(function (err, req, res, next) {
  const status = err.status || 500;
  const message = err.message;
  if (process.env.NODE_ENV !== "test") console.error(status, err.stack);
  return res.status(status).json({ error: { message, status } });
});
```


# An entire Express App 

```javascript 
import express from "express";
const app = express();

import { NotFoundError } from "./expressError.js";

app.use(express.json());                           // process JSON data
app.use(express.urlencoded());                     // process trad form data

// ... your routes go here ...

app.use(function (req, res) {                      // handle site-wide 404s
  throw new NotFoundError();
});

app.use(function (err, req, res, next) {           // global err handler
  const status = err.status || 500;
  const message = err.message;
  if (process.env.NODE_ENV !== "test") console.error(status, err.stack);
  return res.status(status).json({ error: { message, status } });
});

export default app;
```

# Debugging Express 

1. Run and Debug tab → JavaScript Debug Terminal (Make sure you have a JS file open!)
2. set a breakpoint inside route to inspect parameters 
3. startup the server -- In Debug Terminal: `node server.js`
	cd [project]
    $ node server.js
    Debugger attached.
    Started http://localhost:3000/
4. get to the route (make a request to the route via Insomnia)
5. now paused on the breakpoint
6. can inspect lefthand side (variables)
7. can hit "play", "step through", "step over"

When you’re finished, **Control-C to stop running the server in the debug terminal** (simply closing the terminal will not stop the server)
- to open terminal in VS code, control-backtick 



# What to Test in an API? 
- Getting all cats
- Getting a single cat
    - What finding successfully looks like
    - What happens when it is not found
        
- Deleting a cat
    - What deleting successfully looks like
    - What happens when it is not found
        
- Adding a cat
    - What creating successfully looks like
    - What happens when you create a duplicate cat
    - What happens when you are missing required data