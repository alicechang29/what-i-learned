
# App with DB Updates & User Auth

See Messagely exercise 

Files Needed: 
- .env
- app.js
- server.js
- config.js
- db.js 
	- connection file 
- db schema file .sql 
- models 
	- references db 
- Routes 
- Middleware 
	- user auth 

# App with DB for GET Requests ONLY 

Files Needed: 
- app.js 
- server.js 
- db schema file .sql 


# Testing if Model Works 

1. start up the server 
2. console.log() the function and check the terminal 
3. Need to await the results 
```js
console.log(await User.findAll());
```

# Route Issues 

1. Be careful with the route prefix, as defined in the **app.js** file. 

**To hit the endpoint: localhost:3000/users** 

If in app.js the route is prefixed as: 
```
/** routes */
app.use("/users", usersRoutes);
```

Then in the users routes file, the endpoint needs to be defined as: 
```
router.get("/", async function (req, res){}
```

Otherwise, the endpoint becomes: /users/users and not /users 
