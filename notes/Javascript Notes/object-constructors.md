# Object Constructors

When there is an object that needs to be duplicated (like books), it's more efficient to use an object constructor.

```js
function bookInfo(title, author, pages, readStatus) { //this is an object constructor
  this.title = title,
    this.author = author,
    this.pages = pages,
    this.readStatus = readStatus;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus}`;
  };
}

const theHobbit = new bookInfo("The Hobbit", "JRR", 294, "read");

console.log(theHobbit.info()); // The Hobbit by JRR, 294 pages, read
```

## Object Prototypes

All objects have a prototype.

**Prototypes** are another object.