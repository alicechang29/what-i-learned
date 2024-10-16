

**Reminders**
1. Make a **mapping function** so that no matter what the fields are called in the input data, it maps to fields you defined 
2. **When generating an output file**, don't pass the actual input row into the output. Should instead pass in my translated row 
3. **Python** **Rules**: 
	- Accessing dict with ['key'] - if key doesn't exist, throws value error
	- Using `.get` does not throw an exception, it returns `none` if no matches 
		- it also takes a **2nd argument** of what it will return instead of `none` 
	- **==If outputting results, rather return `""` instead of an exception==** 
	- **==Better to use `.get` unless you want an exception to happen==** 
4. If involving **API's**
	- Use `response.ok` instead of searching by status codes if API's are involved 
5. **Try/Except blocks**
	- Make sure the try/exception are intentional. Don't just blankly put them in



