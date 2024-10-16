## Abstract Data Types (ADT)

**Linear Data Structures:** Collection of data that can only be traversed sequentially with logical start and end (1 node to another 1 node)
- Lists
- Linked Lists
- Queues 
- Stacks 

**Non-Linear Data Structures**: A node could have links to **multiple other nodes** 
- Trees 
- Graphs 

### List 
- Space in memory is allocated at the time of variable declaration 

| Action            | Big-O |
| ----------------- | ----- |
| Retrieve by Index | O(1)  |
| Find              | O(n)  |
| Insert at front   | O(n)  |
| Insert at back    | O(1)  |
| Delete at front   | O(n)  |
| Delete at back    | O(1)  |

### Linked List 
- All values in LL point to each other 
- Space does not need to be allocated at the time of variable declaration 

| Action               | Big-O |
| -------------------- | ----- |
| Go from node to node | O(1)  |
| Insert at front      | O(1)  |
| Insert at back       | O(n)  |
| Delete at front      | O(1)  |
| Delete at back       | O(n)  |
| Insert in middle     | O(n)  |
| Find a node          | O(n)  |
| Find by index        | O(n)  |

### Queue
"First In, First Out"
- remove values from front of the queue (shift)
### Stack
"First In, Last Out"
- remove values from back of the stack (pop)


### Hash


### [Tree](https://medium.com/basecs/how-to-not-be-stumped-by-trees-5f36208f68a7)
- A tree with `n` nodes has `n-1` edges
- Trees are recursive data structures (a tree can have trees inside of it)
- **Depth of a Node** = how far away is the node from the root of the tree
- **Height of a Node** = how far is the node from the furthest away leaf 
	- Max number of edges (longest path) from that node to furthest leaf 
	- Leaf = any node that doesn't have a child node in the tree 

![[Pasted image 20241011111625.png]]



### Graph 
Unweighted 
Weighted 

## Algos

### Recursion 
#Trees
==TODO: look up other recursive data structures ==
1. Define a base case (when to stop) 
2. Define the recursive case 
3. Think about if the recursive case needs to happen on an if condition or return once a value is found 

### [BFS ](https://medium.com/basecs/breaking-down-breadth-first-search-cebe696709d9)
#Graphs #Trees
https://medium.com/basecs/going-broad-in-a-graph-bfs-traversal-959bd1a09255

**BFS finds the shortest path** 

1. Declare a queue 
2. Have a visited list 
3. While the queue is not empty
4. Remove a value from the queue (shift)
5. Check if the current value is in visited 
6. If not, add the neighbors to the queue if not visited 

### [DFS](https://medium.com/basecs/demystifying-depth-first-search-a7c14cccf056)
==TODO: read the article== 

#Graphs #Trees
**DFS finds the longest path**

1. Declare a stack 
2. 

#### Pre-Order DFS 
"look at myself, then at my children"

#### Post-Order DFS 
"look at my children, then at me"

## Search 
Binary Search 

## Sort 
Merge Sort 
Quick Sort 
TimSort 
Max Heap? 


## Tips

#### Assume a function is given 
If I don't know something, assume I have it with a placeholder 

#### Keeping track of values in Queues, Stacks, Recursion, etc 
Can pass values to keep track of into the queue 
```javascript
let q = []; 
let coord = [0,1]; 
let depth = 1; 
//recurse, etc... 
q.push([coord, depth])

```

#### Dealing with Coordinates
#Matrix #Graphs
**Keep track of visited coordinates using a ==Set==** 
- Convert the coordinates into a string 
```javascript
//given coordinates [0,1]
let s = new Set(); 
let coord = [0,1]; 
s.add(coord.toString())

//s = {'0,1'}

```


#### Find Next Min/Max number of an Array 
**Utilize the array index**
- If finding the next min number, can compare numbers to the index 
- Can use the array's length as a comparison 

