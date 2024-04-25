# Function for Iterables

`.count()`
- count the given element within the iterable

```python
def single_letter_count(word, letter):
    word.lower().count(letter.lower())
```

# Dictionary

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



