rithm > Node-Express > demos > express-pg-oo-demo

OO Model 
- Won't hold any data - will hold the SQL queries 
- Used to abstract data out of the routes 

## REMEMBER 
- make sure to sanitize the queries ($1)
- Throw errors if not found 
- On the ROUTE, make sure to **await queries and calling methods** on instances before moving on 

### When to make class methods static or not static? 
- **Static:** 
	- when you don't need to make an instance to do something 
	- Get all cats, Get cat by ID, Create a cat 
- **Not Static:** 
	- Don't make static when method is performed on existing Cat instance 
	- Update, Delete, Save 

#### When getting all Dogs, can make instance out of each Dog and using .map and pass it to the route

Constructor: 
```javascript

 constructor({ id, name, age }) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
```

Dog Model 
```javascript 
  /** get all dogs: returns [dog, ...] */

  static async getAll() {
    const result = await db.query(
        `SELECT id, name, age
           FROM dogs`);
    return result.rows.map(dog => new Dog(dog));  }
```

routes.js
```javascript
/** get all dogs: [{id, name, age}, ...] */

router.get("/", async function (req, res, next) {
  const dogs = await Dog.getAll();
  return res.json(dogs);
});
```

#### Can getting a single dog, can make an instance using regular instance declaration 

Dog Model 
```javascript 
 /** get dog by id: returns dog */

  static async getById(id) {
    const result = await db.query(
        `SELECT id, name, age
           FROM dogs
           WHERE id = $1`, [id]);
    const dog = result.rows[0];

    if (!dog) throw new NotFoundError(`No such dog: ${id}`);

    return new Dog(dog);  }
```

routes.js
```javascript

/** get dog by id: returns {id, name, age} */

router.get("/:id", async function (req, res, next) {
  const dog = await Dog.getById(req.params.id);
  return res.json(dog);
});
```


#### Deleting a Dog with Non-Static method 

Dog model 
```javascript 
 /** delete dog */

  async remove() {
    await db.query(`DELETE FROM dogs WHERE id = $1`, [this.id]);
  }

```


**NOTE: Make sure to AWAIT because:** 
1. AWAIT querying the dog from the DB 
2. AWAIT applying the method .remove() on the dog 
3. Return the json - don't want to move on before we get a response 
route.js
```javascript 

/** delete dog from {id}; returns "deleted" */

router.delete("/:id", async function (req, res, next) {
  const dog = await Dog.getById(req.params.id);  
  await dog.remove();
  return res.json("deleted");
});
```

### Save functionality on a dog 
- just call the .save() method 
- do the work to change something about the dog elsewhere 
Dog model 
```javascript 

 async save() {
    await db.query(
        `UPDATE dogs
         SET name=$1,
             age=$2
           WHERE id = $3`, [this.name, this.age, this.id]);
  }
```

route.js 

```javascript
/** age dog: returns new age */

router.post("/:id/age", async function (req, res, next) {
  let dog = await Dog.getById(req.params.id);
  dog.age += 1;  //If this is something more complex about the dog, eg: calculating health score of the dog, it might be a method that lives on the dog class and then get called here. 
  await dog.save();  
  return res.json(dog.age);
});
```


## 2 types of Models: 
- Simple 
- Smarter 

**"Simple"** 
- All methods are static on the class (get all Cats, get Cat by ID)
- All methods are fetching from the Database and then doing something 

**"Smarter" -- Most similar to an ORM** 
- Only some methods are static 
- Others are regular methods (Update, Save )
- Create instances out of what was queried 



SQL 
- in SQL, put "" (doublequotes) around field names if I want the field name to be exactly as I wrote for using within objects 
	- otherwise, SQL will automatically lowercase the field names 