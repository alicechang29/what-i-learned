### Casing Rules 
- Classes -->  CamelCase 
- Variables -->  snake_case 

### Reminders 
- `set()` is lowercase
- `len(data_structure)` to get length of set, lists, tuple, dict, string
- **comparisons** to True/False should use `is`, not `==`
- if i know the key, use `.` , if i don't know key, `[ ]`
- When defining class method, If I want to customize my error message but a method always raises KeyError, check if the value is true/false first -- eg: `key in dict`
- 

### Comparing Equality - `is` vs `==`
**READ:** 
https://stackoverflow.com/questions/132988/is-there-a-difference-between-and-is
https://stackoverflow.com/questions/26595/is-there-any-difference-between-foo-is-none-and-foo-none

## Classes 

```python
class NodeStr:
	def _init_(self, val: str):
	self.val = val 

# create an instance of NodeStr 
new_node = NodeStr("hi")
```

### Rules 
- MUST always pass ==`self`== as the first argument in class methods 
- constructor is `__init__` with 2 underscores 
- To create new instance of a class: `NodeStr(val, val2)`
- If calling another method within the same function, need to use `self.method()`
	- `book = self.search_books_by_isbn(isbn)`


### Dicts 
To get keys by index, turn dict keys into a list and access by index 
- `list(lib.users.keys())[0]`
Same with values:
- `list(lib.users.values())[0]`

**Membership check:** **Use ==`key in Dict`**==
- When defining class method, If I want to customize my error message but a method always raises KeyError, check if the value is true/false first 
```python
def find_user(self, user_id):
	if user_id in self.users: #avoids raising key error
		return self.users[user_id]  
	raise KeyError(f"no user matching {user_id}")

# vs 
def find_user(self, user_id):
	if self.users[user_id]: # this will raise the key error 
		return self.users[user_id]
	raise KeyError(f"no user matching {user_id}") #this will never happen

```


## Errors 

#### Raise Error 
`raise LookupError("value not found")`

#### Try / Except 
Specifically define the errors that need to be "caught"
```python
try: 
	#doing something 
except ValueError as exc: 
	print(f"issue: {exc}")
except LookupError as exc: 
	#error message 
```

#### Finally 
Used to always execute some block of code 
```python 
try:  
  x > 3  
except:  
  print("Something went wrong")  
else:  
  print("Nothing went wrong")  
finally:  
  print("The try...except block is finished")
```

#### Built-in Error Types: `Error(message)`
- KeyError
- TypeError
- ValueError
- LookupError
- PermissionError 



------------------------------------------------



### Lists 

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



