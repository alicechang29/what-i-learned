Normally to run Java code, you need to: 
1. write code 
2. run the build process - compile it 
3. which turns the code into a jar file 

**tldr:** Spring Boot removes the concepts of a container to deploy to. It embeds the containers. Spring Boot is just a jar file that does steps 2 & 3 


### Service 
**tldr:** Service is where business logic goes 
Business logic = answering how something should be created, where something should go, etc. 

### Domain 
**tldr:** Use if you want an endpoint that fits into the REST rules 
- Make an entity class under the domain 
- Make a repository that corresponds to the SQL 
	- All it needs is the data type of the ID (Int, UUID)
- Spring does the rest of the work (accepting request, parse input)

### Controller 
**tldr:** Use if you want an endpoint that doesn't fit into REST rules 
