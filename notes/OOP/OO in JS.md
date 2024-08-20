
O-O approach is about bringing data ("the object") and methods together. 

Given a simple object: 
```js
let fluffy = {
f.name = "Fluffy", 
age = 10 
}
```

And a function with Context: 
- "Context" meaning that it needs to be called on something so that `this` can be defined 
```js
function danceMethod(style){
	return `${this.fname} does ${style}`
}
```

### Oh No 
Doing `fluffy.danceMethod("tango")` will not work (it returns undefined) because there is no "danceMethod" key on fluffy. 

### What to do? - `call()`

All functions in JS have a method, `call`, built-in. We can call "danceMethod" function ON fluffy object. 

`fn.call(context, ...args)`
- `...args` is a fn that can take any # of arguments, making it "variadic"

### Yay
Now, we can do: 
`danceMethod.call(fluffy, "tango")`

## What else can we do? `assign to variable`

Assign code to a variable because functions are "first-class" in JS. 
"First-class" meaning that you can do all the things you can normally do in JS but with functions: 
- put fn in an array 
- assign fn to a variable 
- put it in an object 

Now we can have: 

```js
let fluffy = {
f.name = "Fluffy", 
age = 10, 
dance = danceMethod
}
```

### Yay 
`fluffy.dance("tango")`

This works because: 
- We are giving the context of "fluffy" (what the function should be called on) to `dance` 
	- Left of the dot = context 
- We are passing in the arg "tango" into the danceMethod function 

**Why does this work?** 
danceMethod know what the context is ONLY at the point of function invocation `()`


## What else can we do? `bind()`

```js
function add(x, y){
return x+y; 
}
```

`fn.bind(context, ...args)`

```js

var specialAdd = add.bind(null, 2, 3);

specialAdd() ;// 5 

specialAdd(3) ;//5 
```


#### But... to share methods with other objects (another cat), would need to create a new object 
- Object.create is an option BUT it doesn't copy all the keys from the other object 
- Instead, can create a Prototype 

# Prototype 
- in the olden days, there was no `class`
```js
function Cat(fname, prefSpeed=5) {
  this.fname = fname;
  this.prefSpeed = prefSpeed;
}

//making instances of Cat 

var fluffy2 = new Cat("Fluffy");
var puffy2 = new Cat("Puffy");

//add methods onto ALL Cats 
Cat.prototype.dance = danceMethod;


```
# Class 
"class" keyword is "syntactic sugar", it's a really a "constructor" function aka. Prototype

## Instance Properties 
can add instance properties to class in a constructor function, where values are determined by the caller

```js
class CatWithProps {
  constructor(fname, prefSpeed=5) {
    this.fname = fname;
    this.prefSpeed = prefSpeed;
  }

  numDances = 0; 

  dance(style, speed=this.prefSpeed) {
    this.numDances += 1; 
    return `${this.fname} does the ${style} at speed ${speed}`;
  }
}

// ----- 

var fluffyWithProps = new CatWithProps("Fluffy");
var puffyWithProps = new CatWithProps("Puffy");

fluffyWithProps.numDances // 0 

fluffyWithProps.dance("tango");
fluffyWithProps.dance("salsa");
fluffyWithProps.dance("twerk");

fluffyWithProps.numDances //3 
```


## Static Methods 

Method is called on a Class, not an object. There are no individual attributes on it. 

```js
class CatWithStaticMethod {
  constructor(fname) {
    this.fname = fname;
  }

  static myStaticMethod() {
    console.log("myStaticMethod this =", this);
  }

  myMethod() {
    console.log("myMethod this = ", this);
  }
}

var fluffyWithStatic = new CatWithStaticMethod("Fluffy");

//----- 

CatWithStaticMethod.myStaticMethod() //called on the class 

CatWithStaticMethod.myMethod() //TypeError: CatWithStaticMethod.myMethod is not a function bc regular methods need to be called on instance 

fluffyWithStatic.myStaticMethod() // TypeError: fluffyWithStatic.myStaticMethod is not a function bc static method need to be called on class 


```

### Static Properties 

```js

class CatWithStaticProp {
  constructor(name) {
    this.name = name;
  }

  // good example of a static property --
  // all instances of cats are the same species;
  // it doesn't vary from one cat to another
  static genusSpecies = "feline catus";

  describe() {
    return `${this.name} is a ${CatWithStaticProp.genusSpecies}`;
  }
  // can't do this.genusSpecies bc there is no genusSpecies on the instance. Must call genusSpecies on the class to get the value. 
}

var fluffyWithStaticProp = new CatWithStaticProp("Fluffy");
```


## Binding Methods 

```js

class BoundCat {
  constructor(fname, prefSpeed=5) {
    this.fname = fname;
    this.prefSpeed = prefSpeed;

    // so much happening here! this puts an attribute (property) onto this
    // instance of cat, where that prop is a new, bound version of dance that
    // is permabound to the cat in question!
    this.dance = this.dance.bind(this);
    //1. making a class BoundCat 
    //3. RH side: looking on the copy of fluffyBound, look for method dance, and binding it onto fluffy 
    //4. LH side: and putting it directly on fluffy 
  }

  /* a method that you might use often in callback, or need to pass around
     [like in React, where parents often hand functions to children] */

  dance(style, speed=this.prefSpeed) {
    return `${this.fname} does the ${style} at speed ${speed}`;
  }
}

var fluffyBound = new BoundCat("Fluffy");
//2. when making a new instance of BoudnCat, will call constructor fn BoundCat 


//now can do: 
var cb = fluffyBound.dance 
cb("tango") 

```

## Syntax for Method Binding 
Arrow functions inherit the `this` keyword from the context. 
- when INSIDE an arrow fn 
- JS pretends there is no keyword `this`, it's just a weird variable name inside arrow fn 
- when there is no `this` in inner function, look at outer function, then look at global scope 
- 

```js
class FancyBoundCat {
  constructor(name, prefSpeed) {
    this.name = name;
    this.prefSpeed = prefSpeed;
  }

    //same method, but now an arrow fn assigned to instance property
	//dance is an instance property 
    dance = (style, speed=this.prefSpeed) => {
        return `${this.name} does the ${style} at speed ${speed}`;
    }
}


var fluffyFancyBound = new FancyBoundCat("Fluffy");

//--- 
var cb = fluffyFancyBound.dance
cb("tango")


```


# Inheritance / Subclassing 

```js

class FrenchCat extends Cat {
  // can have a static property for all French Cats
  static likesEdithPiaf = true;

  // can have instances property for cats of this type
  baguettesEatenToday = 0;

  // can have methods
  climbEiffelTower() {
    return "Wheeeee!";
  }

  // can "override" ancestor method -- french cats always dance slowly!
  // calling the dance method and passing in 1 for the speed, without having to repeat the logic for dance 
  dance(style) {
    return super.dance(style, 1);
  }

//DO NOT DO: 
	dance(style) {
	    return this.dance(style, 1);
  }
//bc céline.dance("farandole") will look on celine for dance, won't find it
//then look on FrenchCat, finds it and this = celine, which will cause a LOOP

}

//----
var céline = new FrenchCat("Céline");
céline.dance("farandole")

//'Céline does the farandole at speed 1' 


fluffy.climbEiffelTower() //Type-error - non-french cats don't have this method 
```

-- do the python OO exercise 
keyword:
- class
- extends 
- 
