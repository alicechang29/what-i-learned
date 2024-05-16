- used to store an instance of a class (User, Form) without having to create a new instance every time the (User, Form) is needed 

Flask G
- it's a global object

`@app.before_request`
- Used so that we don't have to write out checking to see if the user matches the session's user
- Instead, can just reference the global object "user"
- Import it as "g" from the flask library
- calls add_user_to_g before request
- setting the global object's "user" key value to user.id in session if it exists
- else, global object's "user" key value is set to none
- Need to make an INSTANCE of the csrf form so that we can access it throughout our app rather than making a new instance of it every time we need a form.

  
```python 
global = {
	user = user.id
}
```
