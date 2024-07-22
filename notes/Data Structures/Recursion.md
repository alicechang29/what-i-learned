
# Steps to Think Through 

1. Base Case - Can be hidden or explicit 
2. Progress 
3. **WHAT DOES THE FUNCTION RETURN?? 
	1. To break out of a recursive function, need to `return` on the "outer-most" level of the function 

- **arrayContains returns a boolean** 
- Given an input of nested arrays, if the sought number is encountered at any point on the "within-levels" of the function, need to return 
- That means, I need to "STOP" the function at the "outer-most" level 
	- `if (arrayContains(num, sought)) return true;`

```ts

function arrayContains(nums: tRecurNumArray, sought: number): boolean {
	for (const num of nums) {
		if (Array.isArray(num)) {
		if (arrayContains(num, sought)) return true;
		} else {
			if (num === sought) return true;
		}
	}
return false;
}

```


## Hidden Base Case 
- might be a for loop or IF condition -- ^^ see `arrayContains`

## Explicit Base Case 
- the base case is spelled out -- IF condition 
- Returns a real-valid value 
```ts
function everyThird<T>(input: T[], output: T[] = [], idx = 2): T[] {
	//need to stop when input array is empty
	if (idx >= input.length) return [];
	output.push(input[idx]); //[30]
	//returns an array
	everyThird(input, output, idx += 3); //[10, 20, 30, 40, 50, 60, 70] , [30, 60], 8

return output;

}
```

