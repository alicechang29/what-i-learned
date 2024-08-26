 the database schema, and the static data, is basically part of the back end service.  You want to be able to have code that creates/modifies the tables, or that data, in the same git repo with the rest if the code.   flyway calls the SQL scripts that manage that "migrations", and there is a directory full of them with a specific naming convention that flyway translates as "schema revisions", in order.   It makes its own table in the database to keep track of which have been "applied".   And when you run flyway:migrate, it looks if there is anything in the directory it hasn't applied yet, and applies them.   You can run flyway:info, and you can see the list, and from the names you can guess what most of them do.
 
For example, the other day when I added a property `devlirablesMode` to an Applicant, the first step was to make a migration that added the column `deliveables_mode` to the `applicant` table,    And then, as part of the same change, I added that field to the java code.   And then I implemented the logic that was supposed to use it.

Some ORMs (like java's hibernate) have features that will generate / manage the schema for you based on the code, but we don't like those.   Also, many frameworks (like spring) have a feature where you can have the app run `flyway migrate` as part of the app startup, but we don't like that either for operational reasons - there is no perfect way to test the migrations, so every so often you end up with them working on dev and test but then failing on prod, and in my opinion you want to run that as a separate manually step so you can decide what to do when that happens.



`\dt dsvc.*` -- access all tables 


Data migration considerations: 
- Full update:
	- rules on what to do if data used to be there but now is empty 
- Partial update: 


when connecting 2 tables using a join
but can refer to these joins with an id 
- question_group_id 
look at question table and question answer table 
- will see a json data type "answer_options"
- question_answer_table: "answer_body" (json array with answers)
	- it's json bc it's easier to store in json vs putting in columns 
	- it's easy way to cheat when the answer type is different (multiple choice, string, picklist)
	- depending on what type of question it is, the type of json blob - the code expects to find in that field -- find confluence page on that 

use intellij to look through the code 
- DB is built into the editor (see the plugin)

**SPRING stuff** 

BE
" service" = where business logic goes (how somthing should be created, where something goes, etc.)
Setting 
- AbstractSetHandler -- base class that does most of work to figure out where answers go 
GPA extends AbstractKeyHandler -- because this is a multiple choice 
- it knows to look at json bc all the nodes are json 
- on FE - it saves "answer" and "out-of"
- then gpa is normalized to be stored out of 4 
- "KeyHandler" -- tells spring to give me all the beans 
	- This service requires another service - where Spring will do auto-wiring where it creates things in the correct order (saves you a lot of work along with things lombach auto-generates) 
	- and dependency-injection?? 

**Once i can read some java code, go back to read the spring docs** 
- concept of service and domain 
- ^^ confusing bc most of work for accepting request and parse input , Spring is just doing that for you 
- if you want endpoint that dumps out list of applicant schools: 
	- make entity class under domain 
	- make a "repo" that corresponds to the sql 
		- where you tell it what is the data type of the id (int, uuid, etc)
	- Then spring does the rest of the work 
- If you need an endpoint that doesn't fit into the REST rules, need to make a "controller" 
	- eg: createPortalApplicant 
	- Look at the Applicant within domain 
		- there is an if condition to tell difference between applicant and others? 

Look up what annotations and generics are in JAVA
- generics are a solution to a common problem where i want to make a class that makes a list or sort -- can't do this easily with inheritance bc the thing you have to change are the types of the things inside and signature of methods 
	- and wouldn't want to make a new class everytime if something changes 

