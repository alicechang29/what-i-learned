Differences between JS and Python 

- Creating a Class with a constructor 
	- instead of `this`, it's `self`
```python
class NodeStr:
	def _init_(self, val: str):
	self.val = val 
```
- Python is dynamically typed but can also declare types in Python `val: str`
- Instead of `null`, it's `None`
- Lists: 
	- Adding values to an array (list), it is `list.append(val)`
	- Removing values: 
		- `list.pop(1)` removes value at index **and** returns the removed value 
		- `list.remove(val)` removes the first instance of the specified value
```python
list = ['apple', 'cherry', 'apple', 'banana']
list.remove('apple')
# ['cherry', 'apple', 'banana']
```

 
### Casing Rules 
- Classes = CamelCase 
- Variables = snake_case 


### Function for Iterables

`.count()`
- count the given element within the iterable

```python
def single_letter_count(word, letter):
    word.lower().count(letter.lower())
```

### Dictionary

Dictionary methods:

`.get()`
- get the dictionary key's value
`.get(dictionary key, default value)`

```python
def multiple_letter_count(phrase):

dict = {}

for elem in phrase:
dict[elem] = dict.get(elem, 0) + 1
return dict
```



