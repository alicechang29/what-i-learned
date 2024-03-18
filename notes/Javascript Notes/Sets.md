# Sets

The Set object lets you store unique values of any type.

- Sets are its' own object type. NOT an array.

```js
let mySet = new Set([1,2,3,4,5, 5]);

mySet;
/// Set(5) {1, 2, 3, 4, 5}
```

### Create a Set

```js
const set1 = new Set([1,2,3,4,5]);

console.log(set1.has(1)); //true

set1.add(6); // Set [1,2,3,4,5,6]
```

### Finding the Size of a Set
- Use .size, not .length

```js
set1.size; //6

//eg:

function hasNoDuplicates(arr){

    let dedupe = newSet(arr);

    return arr.length === dedupe.size;
}
```

