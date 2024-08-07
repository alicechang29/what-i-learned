# Conceptual Questions
- Think of at least one example of some kind of API request over HTTP which would count as "not REST"   
	- The only "Write-only" requests are PUT, POST, PATCH 
	- Logging in - this is a `POST` request but `POST` in REST refers to creating a new record but logging in would not result in a new user record
		- If using `PUT`, this would result in wiping out the existing Password value
    
- If someone described an API as saying it is purely a JSON REST API, and provided a list of entity names like users, schools, etc, and for each resource listed all the fields including their types and which were required, would you need to know anything else?
	- **TBD**

- What is the difference between PUT and PATCH?  What are the downsides/failure cases to watch out for when using each one?
	- `PUT` - keep everything on record and change x field 
	- `PATCH` - here is the whole record, make current record look like the new record
	- Why `PATCH` over `PUT`? 
		- **TBD**
		- 


# What do RESTful API's Have? 
1. Base URL: `http://site.com/api/`
2. Resource after the Base URL: `http://site.com/api/snacks`
3. Use standard HTTP verbs 
4. Structure routes in a standardized way "RESTful Routing"

| HTTP Verb | Route        |
| --------- | ------------ |
| GET       | /snacks      |
| GET       | /snacks/[id] |
| POST      | /snacks      |
| PUT/PATCH | /snacks/[id] |
| DELETE    | /snacks/[id] |

