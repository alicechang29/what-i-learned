
## SOLID Principles 
Note: In interview setting, many of these principles will probably be broken due to time constraints but if asked, need to know how to explain...


- bigger entities (users) should hold reference to smaller entities(books)

https://stackoverflow.com/questions/5814411/what-are-some-best-object-oriented-design-practices
## Defining Data Types for Fields 
- If field only has 2 values -- `boolean`
- If field has >2 values -- `enum`
## Throwing Errors
- Throw errors whenever possible so that the caller of the API can handle it. 
	- **==FAIL FAST==** 
- If I don't throw an error, the caller of the API may not even know there is an issue 

In “search” function, can do either:
- **Return null/“unavailable” if book is not found**
	- definitely requires additional documentation, because otherwise the caller would not know null/“unavailable” represents anything special.
- **Throw exception if book not found**
	- Don't need to do anything extra 
	- Caller can just catch the error 

**Note: JS Error Class** 
- **`Error`** is the default constructor provided by JavaScript to represent an error.
- JavaScript does not have a built-in `Exception` object, so using `Error` is the correct way to create exceptions.
```js
function borrow(isbn: string, user_id: string) {
  const book = findBookByIsbn(isbn); 
  const user = findUserById(user_id); 

  if (!book) {
    throw new Error("Book not found");
  }

  if (book.status === "available") {
    book.status = "not available";
    user.borrowedBooks.push(book);
  } else {
    throw new Error("Borrow failed: Book is not available");
  }
}


```

#### Catching Errors 
In JavaScript, errors are **thrown** using the `throw` statement and **caught** using `try/catch` blocks.

#### Error Vs Exceptions 

In JS: 
- **Error**: This is the base class for all error types in JavaScript, and includes various subclasses such as `TypeError`, `SyntaxError`, and `ReferenceError`. These are typically recoverable, depending on the situation, and can be caught using `try...catch` blocks.
    
- **Exceptions**: JavaScript uses the term "exception" to describe events that disrupt the normal flow of code execution, like throwing an error. When you throw an error, it's considered an exception. However, these are often categorized under the broader term "errors."

|**Aspect**|**Exception**|**Error**|
|---|---|---|
|**Severity**|Generally less severe, recoverable|Errors in JavaScript are generally recoverable too, but can be critical depending on the error type|
|**Caused by**|Code issues, invalid inputs, unexpected cases|Code issues, invalid inputs, environment issues (like memory leaks or stack overflow)|
|**Handling**|Can be caught and handled via `try...catch`|Can also be caught and handled via `try...catch`, though some critical errors may terminate the process|
|**Examples**|`TypeError`, `ReferenceError`, `RangeError`|`OutOfMemoryError` (browser-related), critical stack overflows, security exceptions|

### Error Propagation 
In class and library definitions, let the errors propagate (throw) and have the caller catch the errors. 
- Errors can propagate up the call stack, rather than catching and handling at every level 
- Allows caller to determine how to handle exceptions 

- think of Python forex converter throwing exceptions and I handled the exceptions however I wanted inside my forex calculator 

## Utilize Unique ID's whenever possible 
- If I am having the class generate unique ID's, use the ID's for quick lookups within data structures 

**If I hold books within an array inside Library, steps to query for a book are:** 
1. Iterate through all books 
2. For each book, check if the isbn matches the isbn I am searching for 
--> O(n) time complexity 

**If I hold books within a map, steps to query for a book are:** 
1. Check if the Map contains a key with isbn 
--> O(1) time complexity 


```javascript 

class Book {
	constructor(isbn, title, author) {
		this.isbn = isbn;
		this.title = title;
		this.author = author;
		this.status = true;
	};
};

//NO - O(n)
class Library(){
	constructor(){
		this.books = []; //NOTE: THIS DOES NOT UTILIZE UNIQUE ID's OF BOOKS 
	}
	search(isbn){
		for(let book of this.books){
			if(book.isbn === isbn) return book; 
		}
		throw new Error("no book found"); 
	}
}

//YES! - O(1)
class Library(){
	constructor(){
		this.books = new Map(); //USING MAP 
	}
	search(isbn){
		if(this.books.get(isbn)) return this.books.get(isbn); 
		throw new Error("no book found");  
	}
}
```


## Inheritance vs Subclassing 

**"is a" vs "has a"**

"Car is a vehicle" 
"Truck is a vehicle"

**"Truck has cargo"**
"Cargo is a toaster"
"Cargo is a car"

Could have a top-level Base class: "ITEM"

Car has all the methods of Vehicle (extends vehicle)

Cargo is the interface (Interface = defines a list of methods and whoever uses it has to follow those rules) 
- id
- last modified time 


