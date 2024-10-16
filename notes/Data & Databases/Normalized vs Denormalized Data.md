## Normalized Data Schema 
- Each thing is its own table 
- Reference each other using an id 
- Use a join to combine data 

Things that work badly in a `join`: 
- when you want to compare data across many different things 

## Denormalization 
- combine things together to make a **Data Warehouse Schema**

### Example: 

**OLTP data system (Normal)**
- ==Online transaction processing== (OLTP) is a database system that stores and processes transactional data in real time

Table of: 
- Orders 
- Products 

Things you can do: 
- Create orders 
- Find Products 
- Find orders that belong to a person 

Questions someone might ask for Reporting: 
- How many orders got placed yesterday? 
- How did that compare to 2 weeks ago? 
This gets messy! = use Data Warehouse 

### Reasons For A Data Warehouse 
- How long you keep the data 
- What's in it? 
- Read-only data 
eg: Pentaho 

#### How it works: 
- copy data into the data warehouse 
- "Star-schema" -- used for non-transactional operations 
#### Data Warehouse Types: 
- **"Data Lake"** (dumping all the data together)
	- Reports don't come from data stored are on a single system but from a whole bunch of systems 


