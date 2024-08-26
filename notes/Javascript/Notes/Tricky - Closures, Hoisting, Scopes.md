# Scope 
## `var` has function scope 
```js
function a(){
	console.log(x); 
	var x = 10; 
}
a() ;// Undefined 
```
`a()` returns undefined because JS is **hoisting** var x (where the declaration of x is hoisted to above where it is called)
```js
function a(){
	//var x; //JS hoists declaration of x to here 
	console.log(x); 
	var x = 10; 
}
a() ;// Undefined 
```


## `let` and `const` are block scoped
```js
function b(){
	console.log(x); 
	let x = 10; 
}
b() ;// Reference error 
```

# Closures 

- Closures give a way to persist state with a function 
- Inner function remembers variables that are defined in an Outer function, after it has returned 

```js
function idGenerator() { //closure 

	let start = 0;

	function generate() { //relies on variables in outer fn ("free variables")
		start += 1;
		return start;
	};
	return generate; //return access to inner fn 
}

gen = idGenerator();

gen(); //1 
gen(); //2

alicegen = idGenerator(); 
alicegen(); //1 

alicegen = 6 ;// NOPE 

```

Closure is old-school version of O-O
```js

class IdGenerator {
	#start = 0; 
	
	generate(){
		this.start += 1; //allows for gen.start = x  
		this.#start ;// makes start private, can't do gen.start = x
		return this.start;
	}
}

gen = new IdGenerator(); 

gen.generate();// 1 
gen.generate();//2 

gen.start = 0; //This is possible in O-O but not in closure 

```

# Try, Catch, Finally 

```js
function myFunc() {
  try {
    // do something potentially causing an error
  } catch {
    // catch the error and deal with
  } finally {
    // no matter what happens, this will be run
  }
}
```

# Generators and Yield 
- a Generator that can be lazily looped over 

```js

function* evens(n) { //funtion* means a "special fn"
  while (true) {
    yield n; //will forever hand you back next even num 
    n += 2;
  }
}

// make a "Generator":
// will return even numbers 2+
let allEvens = evens(2);

// lazily get the first 10 even numbers
for (let i=0; i < 10; i += 1) {
  console.log(allEvens.next().value);
}
```

