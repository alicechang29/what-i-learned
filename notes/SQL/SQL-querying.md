# SQL Querying
- have to know what the schema of the table is before you start querying
`\d`

## SELECT
- does not alter data
```SQL
SELECT COUNT(*) FROM posts;

SELECT num_likes / 2 FROM posts;
```
- SELECT statements have subclauses, which are performed in this order:
1. FROM
2. WHERE
3. GROUP BY
4. HAVING
5. SELECT -- Required
6. ORDER BY
7. LIMIT
8. OFFSET

- declarative - describe what you want
- imperative - tells you the order of what you want

**Math: need to specify float/decimal numbers**
- `SELECT 'math is fun', 2*3, 4/6::float;`
- `SELECT 'math is fun', 2*3, 4/6.0;`

Notes:
- don't forget `;` at end of statement
- don't forget, single quotes around strings


## FROM
- determine which tables to use to get data

**Important:**
In Flask, when database is talking with server, better to specify out all the columns that are needed, rather than writing `SELECT *`
- Better to be explicit for future readers to know what's included
- If schema of the table is changed, if using `SELECT *`, which can include internal information -- Security Issues

## WHERE
- filter results
```SQL
SELECT *
  FROM posts
  WHERE pub_date >= '2020-05-01';
```
- put quotes around date when querying it
    - standard is YYYY-MM-DD

## GROUP BY
- Reduce amount of rows returned by grouping rows together

- groups all the authors together
```SQL
SELECT author
  FROM posts
  GROUP BY author;
```

**Order that sql is run:**
- From posts
- get all the posts after pub_date
- group by the authors
- and return the authors
```SQL
SELECT author, COUNT(*)
  FROM posts
  WHERE pub_date <= '2020-05-01'
  GROUP BY author;
```


**Grouping by multiple things**
- More things you group by, the smaller the groups get

```sql
SELECT author, COUNT(*), pub_date
    FROM posts
    GROUP BY author, pub_date
```

**Aggregate fn**

```sql
SELECT author, COUNT(*), MIN(pub_date)
    FROM posts
    GROUP BY author
```

## HAVING
- if you have groups, can have a HAVING clause
- can't use HAVING Without GROUP BY
- decide which groups to keep

```sql
blog=# SELECT author, COUNT(*), SUM(num_likes)
        FROM posts
        WHERE pub_date <= '2020-05-01'>
        GROUP BY author
        HAVING SUM(num_likes) >= 700
```
1. from posts
2. get posts where pub_date is less than 2020-05-01
3. by author
4. that have total sum of num_likes for those posts be greater than 700
5. and return author, count of posts, and total sum of num_likes

Functions that can go inside SELECT clause
- AGE() - time since date

**Can rename an expression using `AS`**
```sql
SELECT product_name, price / 2 AS sale_price
    FROM products;
```

## ORDER BY
(ORDER BY happens after SELECT statement is run)
- sort rows before returning

```sql
SELECT *
  FROM posts
  ORDER BY author, title DESC;
```
- sort first by author, then by title

- if you don't order query by anything, database will make up the order for you

## LIMIT
- Only show n number of rows

```sql
SELECT *
  FROM posts
  ORDER BY pub_date
  LIMIT 3;
```

## OFFSET
- Skip n number of rows
- OFFSET 2 - skip first 2 rows

```sql
SELECT *
  FROM posts
  ORDER BY pub_date
  LIMIT 2
  OFFSET 2;
```

# SQL OPERATORS
- =
- <, > <=, =>
- IN, NOT IN
- BETWEEN (is inclusive )
    - `WHERE pub_date BETWEEN '2020-01-01' AND '2020-03-21'`
- AND, OR

```sql
SELECT *
  FROM posts
  WHERE author IN ('Joel', 'Elie')
  ORDER BY author, title DESC;
```

# SQL AGGREGATES
- can be used to combine records together to extract data
- common aggregates: COUNT, AVG, SUM, MIN, MAX














