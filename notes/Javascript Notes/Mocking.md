
# Mocking Functions 
```javascript 

//"vi" is from vitest that helps with mocking

import { test, expect, vi, beforeAll, afterAll } from "vitest";

import { lucky7Game } from "./casino.js";

//importing entire module with * bc spyOn needs a module as an arg

//import {d6} will only import the function

import * as dice from "./dice.js";


beforeAll(function () {
	// observe calls & make it possible to mock
	//need to import module bc the first arg of spyOn takes a module
	//second arg of spyOn takes name of fn within module
	vi.spyOn(dice, "d6");

});

  

afterAll(function () {
	// after all tests, make dice.d6 normal again
	// (useful if other tests need this)
	vi.restoreAllMocks();

});

//<

  

test("always roll 4", function () {
	dice.d6.mockReturnValue(4);
	expect(lucky7Game()).toEqual(8);

});

  

test("lucky 7!", function () {

	dice.d6
	.mockReturnValueOnce(3)
	.mockReturnValueOnce(4);
	expect(lucky7Game()).toEqual(7);

});

  

test("make sure rolled 2d6", function () {

//clear the history of this mock bc the fn has been called 6 times up to this point

dice.d6.mockClear();
lucky7Game();
expect(dice.d6).toHaveBeenCalledTimes(2);

});
```


# Mocking HTTP Calls 

the function will run but at the point that "fetch" is run, the mocking will jump in 

**To mock actual fetch requests, use msw library** 
- `dev` is used within tests

1. `npm install --save-dev msw`
2. copy paste the apiMock.js 
apiMock.js 
```javascript 

import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

/** Mock request */

function mock(method, base, path, data, status = 200) {

	mockServer.use(
		http[method](`${base}/${path}`, () =>
		HttpResponse.json(data, { status: status }), 
		// returns the status code you tell it which is an input in mock function 
	));

}

const mockServer = setupServer();

export { mock, mockServer };
```

3. Use the mock server 

```javascript 
import { test, expect, beforeAll, afterAll,afterEach } from "vitest";

//pull in the mock server 
import { mock, mockServer } from "./apiMock.js";

import { getFact, API } from "./nums.js";

  
//have the mockServer start to listen 
beforeAll(function () { mockServer.listen() });

//after each test, start with a clean slate for each test 
afterEach(function () { mockServer.resetHandlers() });

// after all tests run, stop having mockServer from listening 
// so that server can start listening for real for other tests 
afterAll(function () { mockServer.close() });

  

test("fact about 7", async function () {
	
	// tells server how to respond if it receives a request like this: 
	// http://numbersapi.com/7 : {text: "7 is lucky"}
	mock("get", API, "7", { text: "7 is lucky" });

	//make a real requst to numbers API but mock server will intercept the request 
	const res = await getFact(7);
	expect(res).toEqual("7 is lucky");

});

  

test("other requests are real", async function () {
	const headers = { accept: "application/json" };
	const resp = await fetch(
		"http://icanhazdadjoke.com", { headers });
	
	const data = await resp.json();
	expect("joke" in data).toBe(true);

});
```


### To test a Route, test the side effects 

```javascript 

/** POST /cats - create cat from data; return `{cat: cat}` */

describe("POST /cats", function () {
  test("Creates a new cat", async function () {
    const response = await request(app)
      .post(`/cats`)
      .send({
        name: "Ezra"
      });
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({
      cat: { name: "Ezra" }
    });
  });
});
```

**Validating Route via Database Check** 
```javascript 

/** POST /cats - create cat from data; return `{cat: cat}` */

describe("POST /cats", function () {
  test("Creates a new cat", async function () {
    const response = await request(app)
      .post(`/cats`)
      .send({
        name: "Ezra"
      });
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({
      cat: { name: "Ezra" }
    });

    const catsRes = await db.query("SELECT name FROM cats;")
    expect(catsRes.rows).toEqual([{ name:"Ezra" }]);
  });
});
```

**Validating Route via API Check** 
```javascript 

/** POST /cats - create cat from data; return `{cat: cat}` */

describe("POST /cats", function () {
  test("Creates a new cat", async function () {
    // same, but instead of checking database ...
    const getCatsResp = await request(app).get(`/cats/ezra`)
    expect(response.body).toEqual({ cat: { name:"Ezra" } });
  });
});
```