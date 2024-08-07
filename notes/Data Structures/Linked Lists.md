Linked List is a list of nodes that are linked sequentially.

Advantages of LL are that:

- Each node references the next node in the sequence. This allows for re-arranging nodes in memory by having a node point to a different node, which is faster than moving items around in an array.

- Operations that are normally O(n) in arrays are O(1) in LL:
	- inserting at start
	- appending to end (only if the LL has a tail)
	- deleting at start

Disadvantages of LL are that to append or remove a node, there are many things to keep track of.

If appending a node
- If list is empty, point both head and tail to it
- If adding to middle of the list, need to traverse to the node before where it should be added and have the next value point to it
- If adding to the end of the list, need to update the tail and the node before it to have next value point to the new node

If removing a node
- If list only has 1 item, update both head and tail to null
- If node is first item, need to update head to point to another node
- if node is in the middle, need to traverse to the node before the one needing to be removed and change the next value to another node's value
- If node is last item, need to update the tail to be another node







![[Screenshot 2024-07-08 at 11.20.44 AM.png]]![[Screenshot 2024-07-08 at 11.20.56 AM.png]]

# How To Solve 

## Reverse a Linked List (in place)

1. Declare 3 pointers to track current node, prev, next node 
	1. prev = null 
	2. curr = head 
	3. next = head 
2. Traverse the list 
	1. If prev = null, then it is the new tail 
	2. If next = null, then it is the new head 
	3. Set next = curr.next to track the original next value 
	4. Set curr.next = to the prev value 
	5. Set prev = curr value 
	6. Set curr = next value 

dsa-arrays-linked-lists 
run test: `npm run test rev-in-place`
O(n) - traversing entire list 

https://medium.com/outco/reversing-a-linked-list-easy-as-1-2-3-560fbffe2088

```ts
function reverseInPlace(lst: LLStr): void {

//[1,2,3]

let curr = lst.head; //3
let prev = null;
let next = lst.head;

	while (curr !== null) {
	
		if (prev === null) lst.tail = curr;
		next = curr.next; //next = null
		
		if (next === null) lst.head = curr;
		
		curr.next = prev; //curr.next = 2
		prev = curr; // prev = 3
		curr = next; //curr = null
	
	}
	
console.log("LIST", lst);

}
```

