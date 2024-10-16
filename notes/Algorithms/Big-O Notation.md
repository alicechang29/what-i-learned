## What is Big-O
Big-O is about calculating COMPLEXITY of an algorithm. 
**Not** to be confused with Runtime (execution time). 

==Time is unrelated to complexity==

When calculating to Big-O, it is referring the number of steps that are needed to complete a task. 
NOT how long it takes to complete the task. 

**Tricky**: 
`O(n)` time is related to the number of things that are in the set. 
It is possible for `O(n)` to execute faster than `O(1)`


| Big O      | Run time  | Example                                                                |
| ---------- | --------- | ---------------------------------------------------------------------- |
| O(log n)   | Log Time  | Binary Search - number of items to search is halved each step          |
| O(n)       | Linear    | Simple Search - need to check each item. Number of checks depends on n |
| O(n log n) |           |                                                                        |
| O(n^2)     |           |                                                                        |
| O(n!)      | Factorial |                                                                        |


### ADT's
##### Arrays 
- Items are stored contiguously in memory 
- When array is declared, space in memory is allocated to the array 
- If number of items grow, 
##### Linked Lists 
- Items can live anywhere in memory 
- 



##### Map
A Map data structure is implemented using a Hash function 
- Hash: takes a string and returns a number (that corresponds to a place in memory)
- A Hash is Pure and Stable 
	- Pure = Not changing any piece of state 
	- Stable = same input always give same output 
- Looking something up in a Map is `O(1)` complexity 

##### Set 
A Set is a Map without values 

##### B-Tree
A B-Tree data structure 
- Looking something up in B-Tree is `O(n)` complexity
A B-Search Tree 
- `O(log n)`


**Why are DB indexes always implemented as a Binary Tree and not a Hash?** 
- Implementing a Hash function is slow 
- 




**What are the performance implications of an unsorted Set vs sorted Set?** 
- Performance implications relate to how things are ADDED to the set 
- Unsorted set, just add new item to the end 
- Sorted set will require finding the right spot to insert the item 




