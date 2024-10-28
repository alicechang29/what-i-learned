## Binary Search

More efficient method to search an array for a value than Linear Search (searching 1 by 1).

Given a ***sorted*** array, binary search can efficiently check if an array contains a value that is being searched for.

### Steps

1. Set a min and max value
```js
let min = 0;
let max = arr.length-1;
```

2. Have a starting point: the average of Min + Max / 2, rounded down
```js
let start = Math.floor(min + max / 2); //this is an index value
```

3. Check if the search value is equal to the array value at the starting point.
- If so, return the index
- If search value is > than array val at starting point, move the min (min = start + 1)
- If search value is < than array val at starting point, move the max (max = start-1)

4. Repeat until search value is found

```js

function binarySearch(arr, searchVal){

    let min = 0;
    let max = arr.length-1;

    while(min <= max){

        let start = Math.floor(min + max / 2);

        if(searchVal === arr[start]){
            return start;

        }else if(searchVal < arr[start]){
            max = start-1;

        }else if(searchVal > arr[start]){
            min = start+1;
        }

    }
    return -1;
}