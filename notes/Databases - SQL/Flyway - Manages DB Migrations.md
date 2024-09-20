## What is Flyway? 
- Flyway calls the SQL scripts that manage migrations 
- In the BE, there is a directory of SQL scripts that flyway translates as "schema revisions", in order 
```shell
Category   | Version     | Description                                               | Type   | Installed On        | State   | Undoable |

+------------+-------------+-----------------------------------------------------------+--------+---------------------+---------+----------+

|            |             | << Flyway Schema Creation >>                              | SCHEMA | 2024-08-21 12:14:20 | Success |          |

| Versioned  | 1           | baseline  migration                                       | SQL    | 2024-08-21 12:14:20 | Success | No       |

| Versioned  | 20230525.1  | add more types                                            | SQL    | 2024-08-21 12:14:20 | Success | No       |

| Versioned  | 20230613.2  | school props                                              | SQL    | 2024-08-21 12:14:20 | Success | No       |
```
- Flyway makes its own table in the database to keep track of which schemas have been "applied".   
- When `flyway:migrate` is run, Flyway looks if there is anything in the directory it hasn't applied yet, and applies them.   

## Flyway Commands  

| Command                 | Definition                 |
| ----------------------- | -------------------------- |
| `./mvnw flyway:info`    | find latest schema version |
| `./mvnw flyway:migrate` |                            |

### Steps to update DB schema 
(adding a field -- adding `deliverablesMode` to Applicant table) 
1. Make a migration that added the new column `deliverables_mode` to `applicant`table
2. Add the field to the java code 
3. Implement the logic 

TODO: -- add more details... 


 
 the database schema, and the static data, is basically part of the back end service.  


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

