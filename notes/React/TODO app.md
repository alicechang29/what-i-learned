
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
			- passing the handleSave fn (inside will be a call back to Create Update, Remove)
			- **QUESTION**
				- **are we doing 2 forms? one for edit and one for new item?** 
				- **if it's 1 form, i guess default the handleSave callback to be the create fn?** 
		- rendering of all existing todo's 
			- set prop to be current state of Todo list items
			- passing the update and remove functions 
		- rendering of Top Todo list
			- set prop to be current state of Todo list items
			- **can filter the list here** ???? 

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

**Todo Form**



# What to Test? 

**Todo component (lowest level component)**
- does it render properly 
- what properties does it have
- write 2 snap shots 

**TopTodo component (1 level higher )**
- Purpose: select todo with highest priority 
- How? 
	- There are todo's 
		- pass in a todo list with 3 todo's with different priorities
		- see if top todo outputs 1 todo with highest priority 
	- There are no todo's 
- Bugs to watch out for:
	- Returning the first value in the Todo list - order of test data matters 
```js
[
	{title: "task1", priority: 3},
	{title: "task2", priority: 1},
	{title: "task3", priority: 2},
]
```

**Editable Todo**
- Purpose: renders a single todo item and tracking if the todo item is in an editable state 
- How?
	- Call Editable Todo, pass it in a Todo item, make sure it renders a Todo 
		- (by checking for a class of Todo)
	- Checking if isEditing works: 
		- Render the Editable Todo 
		- simulate clicking the Edit button 
		- Check to see if the container has the form 
		- check to see if the form has the initial data 
	- **Checking if the editable todo is updated**  - MOCKING 
```js
import { vi } from "vitest"; 
//vi.spyOn(module, "method)

beforeAll(){
	const fakeUpdate = vi.fn() //this is a fn that does nothing but vi is spying on it 
}
afterEach(){
	fakeUpdate.mockClear(); 
}
render( <EditableTodo update={fakeUpdate} />)
// - click the edit link button 
// - click the save button 
// - check that update fn was called 
// - check that it shows the ".Todo" item (not the form)
expect(fakeUpdate).toHaveBeenCalled(); // <-- this might be false positive bc want to test this has been called RIGHT NOW, not ever (if used beforeAll) Solve by making this call inside a test OR use afterEach to mockClear. 
	//.toHaveBeenCalled() is a COUNT of how many times this fake function has been called!! 

```


**Todo Form**

**Todo App** 
- No way to test create/update/remove functions because NOBODY can reach inside to get hands on the component state 
- Can do - fill out the form and check to see if todo item was rendered correctly 
- 