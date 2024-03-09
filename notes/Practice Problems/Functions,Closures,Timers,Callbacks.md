**#1:**
Write a function called createCounter. This function should contain a variable count that is initialized to 0.
This function should return another function that when invoked, increments the counter by 1 and returns the count variable.
You should be able to create multiple counters with the createCounter function and they should all have their own private variable
called count.

```javascript
function createCounter() {
  let count = 0;
  function incCount() {
    return ++count;
  }

  function getCount() {
    return count;
  }

  return { incCount: incCount, getCount: getCount };
}

let counter1 = createCounter();
let counter2 = createCounter();

let countOf1 = counter1;
countOf1.incCount(); //1
countOf1.getCount(); //1
countOf1.incCount(); //2

//can also write as module with IIFE

let counterModule = (function createCounter() {
  let count = 0;
  return {
    incCount: function incCount() {
      return ++count;
    },
    showCount: function showCount() {
      return count;
    },
  };
})();

let addCount = counterModule.incCount();
```

**#2:**

countdown with timer
Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.

countDown(4);
// 3
// 2
// 1
// "DONE!"

```javascript
function countdown(num) {
  let currVal = num;
  let timer = setInterval(function () {
    if (currVal > 0) {
      console.log(currVal--);
    } else {
      clearInterval(timer); //this is needed or else the timer will keep on going
      console.log("Done");
    }
  }, 1000);
}
```

**#3:**

randomGame
Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and return the number of tries it took before we found a number greater than .75.

- select a random number between 0 and 1 (Math.random)
- do this every 1000 ms (setInterval)
- every time a random num is picked, add 1 to a counter
- if the counter is greater than .75, stop the timer and return the count

```javascript
function randomGame() {
  let count = 0;
  let randomNum = null;

  //set interval

  let timer = setInterval(function () {
    randomNum = Math.random();
    count++;

    if (randomNum > 0.75) {
      clearInterval(timer);
      console.log(count);
    }
  }, 1000);
}
```

**#4:**

Write a function called numberFact which takes in a number and a callback and returns the result of the callback with the number passed to it

```javascript
function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 !== 0;
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function numberFact(num, callback) {
  return callback(num);
}
```

**#5:**
find
Write a function called find. It should take in an array and a callback and return the first value found in the array that matches the condition.
find([8,11,4,27], function(val){return val >= 10}); // 11
find([8,11,4,27], function(val){return val === 5}); // undefined

```javascript
function find(arr, callback) {
  for (let num of arr) {
    //if the num passed to the callback function evalutates true, stop the loop and return num
    if (callback(num) === true) {
      return num;
    }
  }
}
```

**#6**
findIndex
Write a function called findIndex. It should take in an array and a callback and return the index of first value found in the array that matches the condition.
// returns 1 (index of the first value greater than or equal to 10)
findIndex([8,11,4,27], function(val){return val >= 10});

findIndex([8,11,4,27], function(val){return val === 7}); // undefined

```javascript
function findIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) === true) {
      return i;
    }
  }
}
```

**#7**

specialMultiply
Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter – it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.
specialMultiply(3,4); // 12
specialMultiply(3)(4); // 12
specialMultiply(3); // returns a function

```javascript
function specialMultiply(a, b) {
  //if both params given, return the product
  if (a !== undefined && b !== undefined) {
    return a * b;
  } else {
    return function inner(b) {
      return a * b;
    };
  }
}

/// using the special arguments array-like object...

function specialMultiply(a, b) {
  if (arguments.length === 1) {
    return function inner(b) {
      return a * b;
    };
  }
  return a * b;
}
```
