## Array Methods
Built in array methods, **iterators**, make it easier to loop through an array.

The parameters for each of these methods is a **callback function** with 3 optional parameters:

- **Value**: the value at the current array index
- **Index**: the current array index
- **Array**: the array itself

### .forEach

- .forEach allows you to iterate over the array but does not mutate the array values. Good for:
    - logging the values
    - taking the values and modifying it
    - performing computation on the values
- it ALWAYS returns **undefined**
    - don't use this method if you need to return something

```js
let arr = [4,3,2,1];
arr.forEach(function(val,index,arr){
    console.log(val);
});

// 4
// 3
// 2
// 1

let doubledValues = arr.forEach(function(val,index,arr){
    return val*2;
});

doubledValues; // undefined
```

#### Example: using .forEach within a function

```js
function double(arr){
    let doubledArr = [];
    arr.forEach(function(val){
        doubledArr.push(val*2);
    })
    return doubledArr;
}
```

### .map

- ***Returns a new array*** of the values returned in the callback

```js
let tripledValues = arr.map(function(val,index,arr){
    return val*3;
});

tripledValues; // [3,6,9,12]
```

```js
function doubleArray(arr){
    // return the result of arr.map
    return arr.map(function(val){
        // return a new array with each value doubled
        return val *2;
    });
}

doubleArray([2,4]); // [4,8]
```

### .filter

-  inside the callback you must return an expression that evaluates to true or false.
    - if the expression evalutes to true, it will be included in the new array

```js
let arr = [1,2,3,4];
let valuesGreaterThanTwo = arr.filter(function(val){
    return val > 2;
});

valuesGreaterThanTwo // [3,4]
```

### .some

- returns true or false
- if ***ANY***  single value evaluates to true, it will return true

```js
function hasOddNumber(arr) {
  return arr.some(function (val) {
    return val % 2 !== 0;
  });
}
```

### .every

- returns true or false
- if ***ANY***  single value evaluates to false, it will return false

```js
function hasOnlyOddNumbers(arr) {
  return arr.every(function (val) {
    return val % 2 !== 0;
  });
}
```
