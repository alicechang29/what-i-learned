# Database
- collection of data organized to be efficiently stored, accessed, and managed
    - server software (database server software)
    - physical computer running that software (database server )
    - particular collection of tables and data (database)

- backend server queries the database and crafts web response based on data (used to respond to HTTP requests)
- frontend does not directly connect to database


- Hierarchical: uses nesting
- Relational: connected via IDs
    - The collection of data for one thing in a table is a **record**
    - Models data as rows and columns for tabular data

## SQL
- used for working with relational DBs

## Importing from SQL

1. recreate the db
`createdb blog`
2. feed blog.sql file into blog db
`psql -f blog.sql blog`
3. connect to the blog database
`psql blog`
4. look at the tables
`\dt`
5. view the schemas of the table
`\d posts`

## PostgreSQL
- comes with database console - psql
- can use this to investigate and interact with the database
- any errors, restart **postgres** in shell:
`$ pg_restart`


### Common commands in psql

| Command         | Definition                      |
| --------------- | ------------------------------- |
| `\l`            | List all databases              |
| `\c DB_NAME`    | connect to DB_NAME              |
| `\dt`           | List all tables (in current db) |
| `\d TABLE_NAME` | View table schema               |
| `\q`            | Quit psql <Control-D>)          |
| \h              | Get help on SQL commands        |
|                 |                                 |

# Getting into a Database

```shell
$ psql -l #list all databases available

$ psql blog #selecting a database

```

# SQL

```sql
SELECT title, pub_data
    FROM posts
    WHERE author = 'Matt';


```
## RULES
- strings are case-sensitive
- strings must be within SINGLE QUOTES
- Keywords written in ALL CAPS

**Types of SQL Statements**
- DML: Data manipulation language
    - commands to create, read, modify, delete data
    - SELECT, INSERT, UPDATE, DELETE
    - foreign key constraints affect behavior

- DDL: Data Definition Language
    - create/delete tables, and modify schemas
    - CREATE TABLE, ALTER TABLE, DROP TABLE
    - specify foreign key constraints

**SELECT queries**
- query results have rows
- tables have records

Select Queries
```sql
SELECT * FROM posts;

SELECT * FROM posts WHERE author = 'Joel';


```

**Creating a database**
- db names should be lower_snake_case
```shell
$ createdb [database_name]
```
**Where is the DB?**
- db is NOT a file in current directory
- saving project in Git won't save the db
- it's a bunch of files/folders elsewhere on computer

**Dropping a DB**
- Dropping DB is completing deleting the schema/data - permanent!
```shell
$ dropdb [database_name]
```
- but can dump out everything into SQL file and put into git


# Indexing 

See lunchly exercise (Express)
```sql
CREATE INDEX reservations_customer_id_idx ON public.reservations USING btree (customer_id);
```
# Exporting 
## Exporting to SQL
- make a backup of DB by dumping it to a file
```shell
$ pg_dump -c -O blog > blog.sql
```
- this makes a file in the current directory, blog.sql
- it contains commands to recreate the schema and data when needed

## Exporting to CSV
`blog=# \COPY posts TO 'posts.csv' CSV`

## Exporting to JSON
`blog=# \copy (SELECT json_agg(posts) FROM posts) TO 'posts.json'`





