## Function Basics

- What is a **function**
  - A function is like a recipe for cooking. It is a set of simple instructions on how to perform a single task.
  - Imagine you have a box labeled “Functions” in your kitchen. Inside the function box, you have a recipe card for making chocolate chip cookies. Whenever you want to make chocolate chip cookies, you take out this function card and follow the instructions, step by step. Similarly, a function is like this recipe card. It gives the computer step by step instructions on how to perform a single task
  - By using a function, you can organize your blocks of code more efficiently and avoid having to repeat the same set of instructions multiple times.
- **Defining** a function

  - create the function’s structure and specify what it does
  - Similar to writing down the instructions for making chocolate chip cookies and naming the recipe card “chocolate chip cookies”

- **Invoking** a function
  - to use a function after it has been defined, it is called invoking the function. Tell’s the computer to carry out the actions specified within the function’s code.
  - Similar to pulling out the recipe card for chocolate chip cookies and referencing it to make cookies.
  - you invoke a function by using its name followed by parentheses **`()`**, optionally passing any required arguments inside the parentheses.
  ```jsx
  //Method 1:
  //defining the function
  function generateRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  //invoking the function
  let random = generateRandomNumber();

  //Method 2:
  //can also define it by assigning it to a variable
  let randomAssign = function generateRandomNumber() {
    return Math.floor(Math.random() * 10);
  };

  let randomNum = randomAssign();
  ```
- What is a **parameter**
  - the variables that are listed as part of a function or method definition
  - Similar to placeholders on the recipe card that indicate what ingredients are needed to make the cookies.
  ```jsx
  function sayHello(fName, lName) {
    console.log(`Hello ${fName} ${lName}`);
  }

  //fName and lName are function parameters
  ```
- What is an **argument**
  - the actual values that are passed to a function when it is called
  - Similar to providing the necessary ingredients needed to make the cookies, such as “flour” and “sugar”.
  ```jsx
  sayHello("Alice", "Chang");

  //"Alice", "Chang" are the arguments
  ```

## Higher Order Functions

- What is a **higher order function**?
  - A function that accepts another function as a parameter
  ```jsx
  //sendMessage is a higher order function that accepts a function (fn) as a parameter
  function sendMessage(msg, fn) {
    return fn(msg);
  }

  sendMessage("Hello", console.log); //Hello
  ```
- `sendMessage("Hello", console.log);`
  - `console.log` is a function that is being referenced
    - Nothing is written to the console until the function is invoked
  - `return fn(msg);` invokes the function - can tell by the ( ) parenthesis
- When passing in a function as a parameter, must always pass in the function name, NOT the invocation of the function

## Anonymous Functions

- A function that is declared without a name
- It is like a secret ingredient your friend gives you to to add to cookies. You know it will make the cookies unique and delicious. You know what it does and how to use it but don’t know what is in it.

```jsx
sendMessage("Hello", function(){
	console.log(message + " from a callback function!");
}

//same as

let myFunction = function(){
	console.log(message + " from a callback function!");
}
sendMessage("Hello", myFunction);
```

## Callbacks

- the function that is being passed as an argument into another function
  - the callback function will be invoked within the higher order function
- Callbacks are like when you enlist the help of your friends **(invoking a function)** to help you bake cookies. You assign each friend a task **(passing the callback function)** and your friends complete the tasks **(executing the callback function)**.

```jsx
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function math(a, b, callback) {
  return callback(a, b);
}

math(2, 3, add); // 5
```

## Closures
