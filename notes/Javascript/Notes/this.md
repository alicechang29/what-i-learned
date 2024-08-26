# The Keyword - "this"

```this``` refers to some ***object***.

To determine what ```this``` is referring to, there are 4 ways to figure it out:

## Rules
1. If keyword ```this``` is **not** inside a declared object, it will be in the global object.

2. The value of the keyword ```this``` will always be the closest parent object.

## 1. Default Binding
### Catch-all rule, when the keyword ```this``` is in the global context
- when "this" is in the global context, default binding applies

```js
var person = "alice"; // using var to declare a variable in the global scope because var/const are block scoped
//if let person = "alice" or const person = "alice", the following wouldn't work.

this.person; //"alice"

window.person = "alice"; //window is the object when running this in the browser console

this.person === window.person; //true

```

## 2. Implicit Binding
### When the keyword "this" is attached to a parent object

```js
let person = {
    fName: "Alice",
    sayHi: function(){
        return "Hi" + this.fName;
    },
    context: function(){
        return this === person;
    },
    dog: {
        sayHello function(){
        return "Hello" + this.fName;
    },
     context: function(){
        return this === person;
    }
    }
}

person.sayHi; // Hi Alice
person.context; //true

person.dog.sayHello; //Hello undefined (bc dog is the closest parent object)
person.dog.context; //false
```

How to **explicitly** change the value of the keyword **this** so that person.dog.sayHello returns "Hello Alice" instead of "Hello undefined"?

## 3. Explicit Binding
### When we want to explicitly set the context for the keyword ```this```.

To explicit bind ```this``` we can use:

### 1. Call
Call immediately invokes the function that it is attached to.

Takes in multiple parameters.
- 1st Parameter is the ```thisArg```: changes the value of ```this```
- 2nd to n-th parameters: are the parameters of the function that is being immediately invoked

```js

var person1 = {
    name: "Matt",
    greet: function(otherName) {
        return "Hi, " + otherName + ", I'm " + this.name + ". Nice to meet you!";
    }
}

var person2 = {
    name: "Tim"
}

person1.greet(person2.name);
//"Hi, Tim, I'm Matt. Nice to meet you!"

//to use the same greet function again but in reverse:

person1.greet.call(person2, person1.name);
//"Hi, Matt, I'm Tim. Nice to meet you!"
```


```js

function sumArguments() {
  //arguments is an array-like object.
  // use slice to make a copy of arguments but use call to make
  return [].slice().call.reduce(function (acc, next) {
    return acc + next;
  }, 0);
}

```

### 2. Apply

### 3. Bind

