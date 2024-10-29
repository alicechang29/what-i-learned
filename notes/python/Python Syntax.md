### Casing Rules 
- Classes -->  CamelCase 
- Variables -->  snake_case 

### Reminders 
- `set()` is lowercase
- `len(data_structure)` to get length of set, lists, tuple, dict, string
- **comparisons** to True/False should use `is`, not `==`
- if i know the key, use `.` , if i don't know key, `[ ]`
- When defining class method, If I want to customize my error message but a method always raises KeyError, check if the value is true/false first -- eg: `key in dict`
- Use `not` in place of `!` 


Type annotation: all or nothing. Don't add.
 Remove lots of "()" 
 Remove "is True"
 "a is False" -> "not a"
 Good specific exception type. In interview raise Exception() is sufficient though.
 book.status = True: ambiguous 
 Learn a bit about for loop filter semantics: [a.field for a in a_list]

### `is` vs `==`
`is` compares memory reference 
`==` compares object value equality 

```python 
a = {'name': "apple", 'q': 15}
b = {'name': 'apple', 'q': 15}

a == b # TRUE 

a is b # FALSE 
```

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


## Dicts 
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

## 6 Falsy Values 
- None
- 0
- False
- ""
- `[]`
- `{}`

## Writing Unittests 

1. `import unittest`
2. `from file import class`
3. for each method that is tested, define the `actual` and `expected` values 
4. use `self.assertEqual` to test if expected = actual 
5. At bottom, designate file as the main test file to run 
```python
import unittest
from debug2 import Item, Inventory

class TestItem(unittest.TestCase):
	def test_create(self):
		item = Item("apple", 15)
		expected = {"name": "apple", "quantity": 15}
		actual = {"name": item.name, "quantity": item.quantity}
		self.assertEqual(expected, actual)

if __name__ == "__main__":
	unittest.main()
```

**To run the test:** `python -m unittest test_item.py`

