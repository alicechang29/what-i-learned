# Node JS Starter

Run `npm install` and then `npm run ...`:

| Command     | Description          |
|-------------|----------------------|
| start       | Start                |
| start:debug | Start w/debugger     |
| test        | Run tests            |
| test:cov    | Run tests w/coverage |
| test:debug  | Run tests w/debugger |



## Node - Package.json setup 
1. Install Node `npm install`
2. add .gitignore and include `npm-module`
3. Ensure that the test scripts are included
```javascript
"scripts": {
	"test": "vitest",
	"test:cov": "vitest --coverage"
},
```


1. In terminal: `npm install`
2. Then run tests

## Using Node REPL 
- make sure to export 
- can do `export default [name of item or app]
```shell
> node 

# to import by function name: 
> const { add } = await import("./math.js");

# to import entire module 
> const math = await import("./math.js");

# to import the default item 
> const cat = await import("./cat.js");
> const Cat = cat.default;
```


# Tests
## Run Tests

In shell: 

| Package JSON scripts                                                            | Definiton                                 |
| ------------------------------------------------------------------------------- | ----------------------------------------- |
| `npm run test --[filename]`                                                     | detect changes in a specific file         |
| `npm run test -- --run {NAME_OF_TEST_FILE}`                                     | run test once and return to shell         |
| `npm run test -- --silent {NAME_OF_TEST_FILE}`                                  | silent option omits logs during test runs |
| `npm run test`                                                                  | detects changes in any file               |
| **Running tests**: `npm run test` _or:_ `test:cov` \| `test:debug` \| `test:ui` |                                           |


**Run a collection of tests**
`vitest --run [collection name "describe]`

**Run all tests**
`vitest --run `


# Write Tests

```js
import { describe, test, expect } from "vitest";
import { add } from "./add";

describe("add function", function () { //Grouping Unit Tests

  test("return sum", function () { //Unit Test
    let sum = add(2, 3);
    expect(sum).toEqual(5);
  });

  test("return sum w/neg numbers", function () {
    let sum = add(-2, 3);
    expect(sum).toEqual(1);
  });

});
```



| Matcher            | Definition                                                                                                 |
| ------------------ | ---------------------------------------------------------------------------------------------------------- |
| .toEqual(obj)      | Has the same value (different objects with same values match)                                              |
| .toBe(obj)         | Is the same object (different objects with same values don’t) -- checking the **REFERENCE** **in MEMORY**  |
| .toContain(sought) | Does iterable contain this item?                                                                           |
| .not.              | Invert (`expect(1).not.toEqual(2)`)                                                                        |
|                    |                                                                                                            |


## Set up / tear down tests

```js
describe("getCartSum", function () {

  let cart; // will hold the cart for the tests

 // this runs before each function and set the cart variable
  beforeEach(function () {
  cart = [
	  { id: "beer", price: 4, qty: 3 },
	  { id: "pie", price: 8, qty: 10 },
	  ];
  });

  test("w/o discount", function () {
    const sum = getCartSum(cart);
    expect(sum).toEqual(92.00);
  });

  test("w/discount", function () {
    const sum = getCartSum(cart, 0.5);
    expect(sum).toEqual(46.00);
  });
});
```

```javascript
describe("my set of tests", function () {

  beforeAll(function() {
    console.log("Run once before all tests");
  });


  beforeEach(function() {
    console.log("Run before each test");
  });


  afterEach(function() {
    console.log("Run after each test");
  });


  afterAll(function() {
    console.log("Run once after all tests");
  });
});
```


- beforeAll - used for creating databases once
- beforeEach for running before each test

# Debugging Steps
1. place red breakpoint
2. invoke the function
3. `node [filename]`





### Node vs NPM vs Vitest 
**Use node for running program**
**Use npm run test -- for running test for a project**
**For single function -- run vitest** 




Testing objects:
- loop through object and check for object key / object value

Options for testing randomly:
- have no branches
- if i work backwards (sliding window)
- set the random


For Testing ideas - see warbler solution

