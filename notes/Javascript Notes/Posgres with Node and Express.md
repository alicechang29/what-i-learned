# Install Postgres
1. go to project directory 
2. `npm install` 
3. `npm install pg`

# Setup DB
1. createdb [db name]
2. psql [table name ]
3. when querying db, need to **async/await** 
```javascript
router.get("/", async function (req, res, next) {
  const results = await db.query(    
	  `SELECT id, name, type
	  FROM users`);
  const users = results.rows;
  return res.json({ users });
});
```
Note: 
- results is an instance of the Result class 
	- -- can read docs of what's in here 
- results.rows = array of POJOs 

1. put breakpoint where I want to be 
2. go to Debug terminal 
3. start server 
4. run the route 

Pay attention to quote use in db.query 

Parameterized Queries 

```javascript
router.get("/good-search",
  async function (req, res, next) {
    const type = req.query.type;

    const results = await db.query(
      `SELECT id, name, type
       FROM users
       WHERE type = $1`, [type]); 
       // $1 represents a placeholder and then pass in the values for the placeholder within an array 
       // Don't put single quotes around $1 even if it is a string 
    const users = results.rows;
    return res.json({ users });
```


- In your SQL statement, represent variables like $1, $2, $3, etc.
    - You can have as many variables as you want
- For the second argument to db.query, pass an array of values
    - $1 will evaluate to the first array element, $2 to the second, etc.
- **Note:** the variable naming is 1-indexed!
	- this will also handle quoting for you: searching for Jeff O'Reilly
	- (strings in SQL need to be surrounded in single quotes)




```javascript
router.put("/:id", async function (req, res, next) {
  if (req.body === undefined) throw new BadRequestError();
  const { name, type } = req.body;

  const result = await db.query(
    `UPDATE users
     SET name=$1,
         type=$2
     WHERE id = $3 RETURNING id, name, type`,
    [name, type, req.params.id],
  );
  const user = result.rows[0]; //index is 0 because result.rows is an array of objects and since in the query, setting Where clause to get 1 single user, just setting to index 0 to get the first object since there is only 1 object in this array anyway. 
  return res.json({ user });
});
```


### Handle Missing Resources in POST/PATCH/PUT 

Return 404's when a variable inputted into req.params is missing resources 

```javascript 
/** Update message #2: 
 * {msg_content} => {message: {id, user_id, msg_content} } */

router.patch("/v2/:id", async function (req, res, next) {
  if (req.body === undefined) throw new BadRequestError();
  const id = req.params.id;
  const results = await db.query(
    `UPDATE messages
           SET msg_content=$1
           WHERE id = $2
           RETURNING id, user_id, msg_content`,
    [req.body.msg_content, id]);
  const message = results.rows[0];

  if (!message) throw new NotFoundError(`Not found: ${id}`);  return res.json({ message });
});
```


# Testing the Database 

$ createdb cats_test
$ psql cats_test -f cats.sql
$ npm run test -- --no-file-parallelism
	or update package.json 
```
{
  "scripts": {
    "start": "node server.js",
    "test": "vitest --no-file-parallelism",
    "test:cov": "vitest --coverage --no-file-parallelism"
  },
}
```
- Note: don't want to run files in parallel because certain actions on DB may happen before other ones which will cause tests to fail 


## Setup and TearDown 

```javascript 

let testCat;

beforeEach(async function () {
  await db.query("DELETE FROM cats");
  let result = await db.query(`
    INSERT INTO cats (name)
    VALUES ('TestCat')
    RETURNING id, name`);
  testCat = result.rows[0];
});

afterAll(async function () {
  await db.end();
});
```


## Testing Create 

```javascript
/** POST /cats: create & return {cat} */

describe("POST /cats", function () {
  test("Create new", async function () {
    const resp = await request(app)
        .post(`/cats`)
        .send({ name: "Ezra" });
    expect(resp.statusCode).toEqual(201);
    expect(resp.body).toEqual({
      cat: {
        id: expect.any(Number),
        name: "Ezra",
      },
    });

    // test db
    const result = await db.query(
      `SELECT *
        FROM cats
        WHERE name = 'Ezra'`);
    expect(result.rows.length)
      .toEqual(1);
  });

	test("Empty", async function () {
	  const resp = await request(app)
	      .post(`/cats`)
	      .send();
	  expect(resp.statusCode)
	    .toEqual(400);
	});
```

## Testing Update 

```javascript 
/** PUT /cats/[id]: update, return {cat} */

describe("PUT /cats/:id", function () {
  test("Update cat", async function () {
    const resp = await request(app)
        .put(`/cats/${testCat.id}`)
        .send({ name: "Troll" });
    expect(resp.statusCode).toEqual(200);
    expect(resp.body).toEqual({
      cat: {
        id: testCat.id,
        name: "Troll",
      },
    });

    // test db
    const result = await db.query(
      `SELECT *
        FROM cats
        WHERE id = ${testCat.id}`);
    const rows = result.rows;
    expect(rows.length).toEqual(1);
    expect(rows[0].name).toEqual("Troll");
  });

	test("PUT 404 if not found",
	    async function () {
	  const resp = await request(app)
	    .put(`/cats/0`)
	    .send({name: "Troll"});
	  expect(resp.statusCode)
	    .toEqual(404);
	});
	
	test("PUT 400 if empty body",
	    async function () {
	  const resp = await request(app)
	    .put(`/cats/${testCat.id}`)
	    .send();
	  expect(resp.statusCode)
	    .toEqual(400);
	});
```

## Testing Delete 

```javascript
/** DELETE /cats/[id] - delete cat,
 *  return `{message: "Cat deleted"}` */

describe("DELETE /cats/:id", function () {
  test("Delete single cat", async function () {
    const resp = await request(app)
        .delete(`/cats/${testCat.id}`);
    expect(resp.statusCode).toEqual(200);
    expect(resp.body).toEqual({ message: "Cat deleted" });

    // test db
    const result = await db.query(
      `SELECT * FROM cats`);
    expect(result.rows.length).toEqual(0);
  });
});
```




