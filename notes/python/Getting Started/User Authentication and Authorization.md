- make sure all POSTS have CSRF protection (that way no one can just delete / update user accounts )
- ensure that forms have check for duplicate username/email, etc 
- setting min password length (6)
- **need to think about what you reveal when denying authorization** 
	- giving 404 vs saying you are not authorized to view this user (victims forum website)
	- "if there was an account with this email address, we will send it" 
	- "The email address or password you entered is incorrect. Please try again."
	- vs "we have sent an email to this user"
	- Until you have proven who you are, be curt with responses 

```python 
if user_id not in session: 
	raise Unathorized 

note = db.get_or_404(Note,id) #knoweldge that there is even a record could be serious 

note = db.get_or_none #there are other types of erros that can be thrown 

if note: 
	... if not you 
	raise Unathorized 
```