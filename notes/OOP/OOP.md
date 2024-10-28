## Glossary 
- Compile Time 
	- can tell things are wrong just by looking at the code in place 
		- eg: Typescript, can see errors right in the editor
- Run Time  
	- need to run the code to find issues 
		- eg: Javascript, can't see issues until running the code 
- Interpreted Languages
	- knows how to read code and does steps at run time (JS, Python)
- Compiled Language
	- language compiles down to something the computer can run (Java, C)
- Strongly Typed 
	- Declares the type (TS )
	- Python - relies on Duck Typing 
		- Duck Typing = allows you to pass parameters, doesn't matter the name, as long as it acts like the method, it is the method 
		- https://www.askpython.com/python/oops/duck-typing
- Loosely Typed 
	- JS 
- **Base Class** 
	- Benefits - does more than interface 
		- Methods 
		- Manage State 
		- Have Properties 
- Overriding 
	- Subclass overrides methods from Base class 
- No-Op 
	- Placeholder that returns void on the Base Class 
	- Can declare a "no-op" in Base class but within the Subclass, you define the implementation 
	- Enforces the **Template Method Concept**
		- Frameworks like React, Django, etc. are built like this 
		- Gives you a place to put your code in the middle of whatever the process is but React defines the beginning and the end 
- **Interface** 
	- Can only define a list of methods 
	- Contract between whoever implemented the thing and whoever uses it 
		- How "this thing" can be used 
			- API (go to this endpoint to do X. But if I change the name of the endpoint, it changes the contract)
- Behavioral Interface - 
	- Public vs Private members of a class 
		- `Vehicle.drive` -- is the public method 
			- Within ^^, there could be private methods: 
				- `Vehicle._pushGas`
				- `Vehicle._putInDrie`
	- Protected vs Private members of a class 
		- Private: can't be accessed by things in subclass 
		- Protected: Subclasses can call/use it but callers outside of the class can't 
		- Not about security, it's about **encapsulation**

# OOP Principles 
Purpose of OOP is to structure data in a way that models the real-world, enhancing code maintainability and reusability. 

It offers: 
- #### Encapsulation 
	- Grouping together data and methods into a single class / object 
	- Hides internal state from the outside 
- #### Type Safety 
	- At **compile time**, you would know if a method worked or not vs. finding out at run time 
	- Public / Private 
- #### Inheritance 
	- Bad thing about Inheritance is that you have to be sure that the methods on top-level class (Vehicles), would apply to all instances of Vehicles (Airplanes and Cars) 
		- If there was a `Vehicles.fly` method, if you put any type check on Cars to ensure that it cannot use `.fly`, you would not know there was an issue until **run time** - losing the benefits of Type Safety 
	- A way to tell if something is good for Inheritance is to see if it fits into the sentence of **"X is a Y"**. If this sentence doesn't fit, don't use Inheritance. 
		- "Car is a Vehicle" 
		- "Airplane is a Vehicle" 
	- **Solution to Inheritance issue is to have a Base class that a Subclass extends** 
		- `Car extends Vehicle `
		- `Airplane extends Vehicle`
		- Vehicle would only have methods to pertain to all vehicles 
		- Subclasses would have methods specific to it 
		- Now, can find type issues at compile time if you try to do `Car.fly`
- #### Polymorphism 
	- 
- #### Reusability 
	- Each class can be developed and tested independently 
	- Class can be reused across different parts of the app 
- #### Abstraction 
	- not everyone has to understand everything in order to write query and use functions 


# Interface vs Subclassing 

"**When it is better to create a base class that subclasses extend, and when it is better to have an interface that classes implement?**" 

**Base class that subclass extends is better when:** 
- If the base and subclass can fit into the **"Is a"** sentence 
- "Car is a vehicle"

**Interface that classes implement better when:** 
- There is a 1-1 relationship, fitting the **"has a"** sentence 
- "Truck has cargo"


Let's say a Truck could carry a Car 
- Truck can carry more things than a Car, it can carry cargo 
	- Cargo could be Vehicle or not 
	- But we shouldn't force Cargo to be a Vehicle 

How to solve? 
- Not every Vehicle is a subclass of Cargo 
- Can have a top-level Base Class (Item - id, creation time, last modified time) 
	- Vehicle extends Item 
	- Cargo extends Item 
- Now, Car is both Vehicle and Cargo, which means there could be 2 copies of Base class properties --> **Multiple Inheritance** - **DIAMOND PROBLEM**
	- Overriding = Subclass overrides method from Base Class 
	- Let's say Cargo modifies "Last modified time"
	- But Vehicle doesn't and uses the Base Class' last modified time 

- Answer: Use INTERFACE 
	- Decide that Car extends Vehicle 
		- drive 
		- park 
	- Make Cargo the interface 
		- id 
		- last modified time 

- Can really define everything as Interface and then "Implement" the interface as a Base Class 
	- Now we have the option to extend or not 

Motorcycle extends Vehicle 
- Vehicle has: weight, shape 

Motorcycle implements the Cargo interface 
- getWeight 
- getShape 


# OOP Language Differences 

**"What is the difference between how people do OOP between JS vs Python"**
- JS does not have built in support for interfaces 
- Interfaces are defined as an object in JS using dynamic approach using duck typing 
	- Duck Typing = object is considered to implement an interface if it has the required methods or properties, regardless of explicit declarations.
- People ensure that classes correctly implement interfaces using: 
	- Tests 
	- Comments / Documentation 
	- Manual checks 
- Can only check at **runtime** (using tests) if an object is correctly implementing an interface 
	- VS in Typescript, we will know at **compile time** since it is a statically typed language 



```js

class Playlist{
constructor(name){
this.songs = []; 
this.name = name; 
}
playlistName = this.name 
}
```