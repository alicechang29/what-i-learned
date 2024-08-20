X = everything listed on resume 

**Explain what X is and how you use it** 
- My favorite programming language and why? What do I dislike about it? 
	- JS bc it's versatile (can be used web dev and server side programming), 
	- Con: 
		- Loosly typed, if not being careful, can have unintended results 
		- small library and no native libraries for complex data structures like queues, heapes 
- JS 
	- dynamic - can change variable types 
- Python
	- high level - read it like english 
	- No need to allocate memory, do garbage collection 
	- dynamic - can change variable types, make new functions in code 
	- runs on servers 
- TS 
	- static- can't change variable types 
	- compiles into a dynamic language 
- SQL 
	- Data Manipulation language CRUD 
	- Data definition language - create, alter, drop table 
	- Sent to DB 
- GraphQL 
	- Data fetching language - sent to API 
	- Query, Mutate, Subscription 
	- Self-learned this because I gave a lightning talk to the class on what this is along with a demo on how to use it 
	- Did a demo where I fetched data using the Star Wars GraphQL API and create queries to get the data in the data structure I wanted  
- HTML 
- CSS 
- React
	- state 
	- 
- React Testing Library 
- Node.js 
	- JS environment used to build server-side apps 
- Express
	- framework for building HTML returning apps / JSON returning API's 
- Django 
	- Python, web framework 
	- SIS is built using Django framework, used it at Rithm internship 
	- Onboarded onto codebase as team 
		- Each pair took a portion of the app and gave a presentation on findings (from models, how the data populates other areas of the app, what parts of the app used the same data)
		- Hardest project was building the lightning talk library and writing tests for it because: part of the functionality was uploading and handling assets 
			- Had to handle security within the app and since django was unfamiliar, it took a lot of time to see how it was done in other parts of the app 
			- Learning how to write tests for it 
			- There were functions specific to django, had to learn what they did 
			- Had issues with updating the schema 
- Postgres 
	- Relational DB 
- Flask 
	- Web framework which defines which requests to respond to and how to respond 
	- Flask gives classes and functions to do this 
- SQL Alchemy 
	- ORM for Python 
	- 
- Unittest 
- Vittest 
- S3 
- Bcrypt 
- Json Schema

**How would you do X 
- Process for writing unittests (with example)
- Learn Spring and Java 

**Tell me what you know about X** 
- OOP 
	- The idea of bringing data and code (methods) closer together - Encapsulate 
		- Group functionality into logical pieces 
	- **when it is better to create a base class that subclasses extend, and when it is better to have an interface that classes implement**
		- Base Class: 
			- Lots of shared functionality 
				- if multiple classes share common code 
			- want to set default behavior 
			- have state management 
			- tight coupling between base and subclass, if they share common foundation 
			- want inheritance 
			- hierarchical relationships 
		- ABC (Abstract Base Class ) / Interface 
			- when need to define common contract across different classes that may not be related by inheritance (Security checks - username, password )
				- In SIS project: 
					- 
- ORM 
	- object-relational mapper 
	- system that bridges ideas of OOP with relational tables 
	- Can create "models" that are OO classes that ultimately use data stored in relational databases 
- Abstraction layer ------ fix  
	- still know how to know layout of db tables, but dont need to write SQL directly 
- Big O 
	- it measures how code performs as input grows 
	- doesn't measure if code is faster, but how efficient it is 
	- concerned with worst-case scenario 
	- allows for analyzing tradeoffs between diff approaches 
- Arrays vs Objects 
	- Arrays - maintain order, easier to manipulate all the data within the array 
	- Objects - contain key-value pairs, easier to manipulate individual properties 
- AJAX 
- Promise  - 1 time guarantee of future value 
	- Promise.all 
	- Promise.allSettled 
- Same Origin Policy - requests must be made where there is same origin (hostname, protocol, port)
- CORS - cross origin resource sharing 
- Variadic = function that takes in any number of arguments 
- try catch 
- Payload 
- Middleware - what's inbetween request coming in and the view function 
	- sits as a layer on the route (authentication)
- Render
- gunicorn 
- TDD 
- REST API 
- Internet (Green - part 2 )
- unit test 
	- A unit test is testing one small, isolated piece of functionality, a unit. This could be testing a function on its own without testing how the functions interacts with the rest of the program.
- integration test 
	- An integration test is testing how pieces of functionality interact with each other and that they work correctly. This could be testing a view function to make sure all the routing and returning works correctly.
- end to end test 
- Hashing 
	- take input and transform it into something unreadable 
	- Pure function - involves 1 way transformation of data 
		- Not changing any piece of state 
	- Same input always has same output 
- 2 way encryption 
	- give password = decrypt 
	- give password = encrypt 
	- without key, file is encrypted 


What was the most difficult problem you personally had to solve on the project?" and the related "What aspect of the project are you most proud of?"

**Other Question's** 
- What is my stance on LLM's 
- What is imperative vs declarative 
- How do I keep up with latest tech? 
- What is something I recently learned? 

**Bug Story**
- Managing CORS policy - Flask (sharebnb)
	- Server and Front-end on different endpoints 


**From non-tech people:** 
- Project I am most proud of 
- Do I prefer backend or frontend? 
- Have I ever had a disagreement with a coworker? 
- What do I do if an API vendor doesn't have the API I want? 
- Has there been a time when a project didn't go according to plan and how did I handle it? 