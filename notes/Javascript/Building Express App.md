![[Screenshot 2024-05-26 at 12.48.07 PM.png]]

# General Process Flow 
1. User sends requests to Server via API route 
	1. These requests can include: registering user, login, CRUD 
2. Server validates the requests 
	1. JSON Schema Validation 
		- if invalid, sends error messages to user 
	2. bcrypt - token validation 
		- if invalid, will not give user a token 
3. Server gets the requests 
	- if user made request via GET, get the values out of `req.query`
	- if user made request via POST, get values out of `req.post`
	- if value from the route itself is needed (/users/:id), get value out of `req.params`
4. Server performs actions 
	- Update the DB 
	- Fetch info from External API, etc. 
5. Server responds to user with a JSON response `res.json({obj})`



# Express -  Performing Actions 

## Working with Postgres DB 
1. Build a model that handles all CRUD actions 
	- Register user, authenticate user,  get all users, update user, delete user, filtering 
2. Within each method, query the DB and make changes 
	- set the result of the query to a variable (`result`)
3. Should make validation checks within the methods 
	- duplicate values 
	- throw errors (not found, unauthorized)
4. To get result from the DB, DB will return an array of values that match the query 
	- To get all results: `result.rows`
	- To get single result: `result.rows[0]`
5. Protect against SQL injection 

NOTES: 
- need to surround renamed column values within double-quotes. 
	- `first_name AS "firstName"`

/models/user.js 
```javascript

static async authenticate(username, password) {
	// try to find the user first
	const result = await db.query(`
		SELECT username,
		password,
		first_name AS "firstName",
		last_name AS "lastName",
		email,
		is_admin AS "isAdmin"
		FROM users
		WHERE username = $1`, [username],
	);
	
	const user = result.rows[0];
	
	if (user) {
	// compare hashed password to a new hash from password
		const isValid = await bcrypt.compare(password, user.password);
		if (isValid === true) {
			delete user.password;
			return user;
		}
	}
	
	throw new UnauthorizedError("Invalid username/password");

}
```



User API 

External API 

 User Validation 

Data Validation  

Middleware - User authentication/auth 