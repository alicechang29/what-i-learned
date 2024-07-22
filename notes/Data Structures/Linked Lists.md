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
