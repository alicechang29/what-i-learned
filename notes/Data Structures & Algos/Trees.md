When to return vs not return when using DFS function? 

**Yes Return:** 
- **Aggregating results** 
	- each recursive call needs to calculate a partial result (depth, path, count) that combines with other calls 
- **Propgate Info Upwards** 
	- if info from each subtree is needed to calculate a final result (min depth, max depth, sum, longest path)
- **End Early** 
	- if the function can end early upon find a specific result (finding a specific node in a tree)

**No Return:** 
- **Need to maintain an external state** 
	- update or collect info within external variables -- (count, global accumulations, modifications to data structures)
- **Exploring all nodes**
	- when need to visit every node without combining results 

| **Purpose**                          | **Return a Value**  | **Do Not Return a Value**            |
| ------------------------------------ | ------------------- | ------------------------------------ |
| Aggregate results across nodes       | ✅ Yes               | ❌ No                                 |
| Mutate external state (e.g., sum)    | ❌ No                | ✅ Yes                                |
| Need information from each subtree   | ✅ Yes               | ❌ No                                 |
| Traverse all nodes without result    | ❌ No                | ✅ Yes                                |
| Short-circuit traversal on condition | ✅ Yes to exit early | ❌ No (only if full traversal needed) |

**Find Max Depth** 
- aggregating results 
```javascript 
function maxDepth(node: TreeNodeNum | null): number {

	function dfs(node: TreeNodeNum | null) {
		if (node === null) return 0;
		let currDepth = 1;
		
		for (let child of node.children) {
			currDepth = Math.max(currDepth, dfs(child) + 1);
		}
		
		return currDepth;
	}
	
return dfs(node);
}
```


**Counting**
- Maintaining external state 
```javascript 
function numGreater(node: TreeNodeNum, lowerBound: number): number {

	let count = 0;
	
	function dfs(node: TreeNodeNum) {
		if (node !== null && node.val > lowerBound) count++;
		
		for (let child of node.children) {
			dfs(child);
		}
	}
	
	dfs(node);
	return count;
}
```

