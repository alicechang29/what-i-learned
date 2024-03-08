
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
