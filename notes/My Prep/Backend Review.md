Flask - Warbler 
- HTML returning Application 

Express - Jobly 
- JSON returning Application 
- API passes data off to consumer of the information 

Express - Lunchly 
- HTML returning application 

File IO - Blogly 
- **stay sharp on this** 
- this is a problem native to backend 
- this is easier in python bc there are native library support 
	- in python, no need to handle async/await 
- in JS, need to handle async/await 


# API Design vs HTML returning application 

Ask: 
- on FE, do you need HTML to dynamically change? 

When to build HTML returning app vs API with JS frontend? 
- if you want more user interaction, API (liking an image) 
- if it's static data, HTML returning (lecture page)

- HTML: 
	- don't have to worry about AJAX 
	- can't dynamically update HTML 
	- dont have to worry about event.preventDefault 
	- don't have to worry about CORS bc no AJAX requests here 
	- Audience is the public 
- API: 
	- service that responds with data 
	- Returns JSON 
	- Follow RESTUL API 
	- Audience is another developer -- changes how data is presented 
	- 

## Considerations to make when building RESTFUL API 
5/6/24 
- Do we have correct endpoints that client needs 
- How to verify the data that the client sends? 
- Are there authorization and authentication needs 
	- Authentication 
		- "are you who you say you are"
		- checking if user has valid login credentials 
	- Authorization 
		- "are you allowed to be here", "are you allowed to do this"
		- checking if user is allowed to be in certain parts of the app 
		- (admin vs regular)
- REST 
	- standards for API design 
	- RESTFUL routing 
		- how to construct a route in REST 

## How is authentication/authorization handled? 
5/20/24 notes 

- HTML returning app - handled with sessions and cookies 
	- once user logged in, credentials saved in the session 
- In Express, use JWT - token with info that has been hashed 
	- JWT token is given to user once user credentials have been verified 
	- JWT is tamper-evident 
	- Interact with JWT in middleware 
		- Middleware = things done in middle of response/request cycle 

## Data Validation 
- how to validate data inside API?
	- JSON Schema Validation (5/21/24)
		- don't have to write all your own IF statements for validation 
	- WTForms (5/3/24)
	- Can do form validation in the view fn 
- how to know what requests we need to respond to?  



#  Library vs Framework 
- Library: 
	- un-opinionated 
	- collection of utilities as a software package 
	- eg: WTForms 
- Framework:
	- opinionated 
	- state of mind - you must do this in order to build an app 
	- collection of software 
	- eg: Flask 

--> React is a framework that calls itself a library 

# Security 
### XSS
- how to prevent malicious data from entering database that looks like real HTML that will be rendered 
### SQL Injection
- when input from user and need to take input and inject it into sql query 
- Use Parameterized queries to safely sanitize the input before putting it into raw SQL string 
- This is typically handled out of box 
- 

