
**App**
- renders TODO app, passing in the list of Todo items as props 

### **TODO App**
- Prop: initial list of Todo items  (passed in from App)
- State: list of Todo items 
- Responsibilities: 
	- Render all the Todo items on the page 
	- Have functions that are passed down to Children 
		- Create, Update, Remove Todo items -  functions 
	- Returns: 
		- rendering of Todo form 
			- passing the handleSave fn 
			- **QUESTION**
				- **are we doing 2 forms? one for edit and one for new item?** 
				- **if it's 1 form, i guess default the handleSave callback to be the create fn?** 
		- rendering of all existing todo's 
			- set prop to be current state of Todo list items
			- passing the update and remove functions 
		- rendering of Top Todo list
			- set prop to be current state of Todo list items

#### **Children of TODO App:** 

**Top Todo List** 
- Prop: list of all the Todo Items 
- State: the current top Todo item 
- Returns: 
	- rendering of 1 Todo Item 

**Editable Todo List**
- Prop:  list of all the Todo Items 
- State: current list of todo items 
- Returns: 
	- Rendering of each to do item in the list as an Editable Todo component 
		- Props for each Editable Todo should be all the values from the original todo item 

		**Editiable Todo Item** 
		- Returns: 
			- rendering of todo form 
			- Props: all the existing values on the ToDo item 