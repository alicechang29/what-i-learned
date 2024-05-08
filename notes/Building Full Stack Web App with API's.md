Deciding between front end/back-end/full stack app: 
- front end parts: games, very visual things 
- back end: can be any 
- 

# Overview 
Process for how to build full stack web app that involves Server-Side Requests 

1. User interacts with a front end (built in Javascript)
2. Browser makes AJAX request to the server (get/post data)
3. Browser awaits a response from the server 
4. Server makes request to API / Database 
5. Server receives response from API/Database 
6. Server sends data back to the browser 
7. Browser updates 
![[Screenshot 2024-05-07 at 10.14.30 PM.png]]

# Definitions 

### API
- primary interface through which clients communicate with a server 
- set of defined methods of communication between various components 
-  can be for web-based system, OS, DB, software library, computer hardware 

# Front End Processes 
- add a form method action 
- need to listen for the form submit 
- need to interrupt the browser by: add an evt.preventdefault() on the event 

## How AJAX Requests Work 
- AJAX Requests are web request made from JS in browser 
![Screenshot 2024-05-06 at 10.18.09 PM.png](app://8dbc60efea7ab0284727f2ecc2ecb39346b0/Users/alicechang/Documents/repos/what-i-learned/notes/Screenshot%202024-05-06%20at%2010.18.09%20PM.png?1715059091633)
### Process 
1. JS makes request using GET, POST using `fetch`
2. Receive a response 
3. Do stuff with the response (eg: display info to user in browser)

#### Fetch API 
- built in browser-based Javascript for making AJAX requests 
- Used for receiving and sending responses/requests (GET/POST)
-  When making requests, need to `await` the response 

#### Receiving Data Process 
eg: Populating DOM with initial data 
1. Initialize getting the data 
```javascript 
/** Populating DOM with initial data */
async function handleStart() {
	const cupcakes = await getCupcakes(); //Note: awaiting the async fn call 
	displayCupcakes(cupcakes); //After getCupcakes() returns data, then this fn is called 
}
```
3. Await response via fetch ('endpoint') of where the response is coming from 
4. Within the function that is fetching the data, await the values of the response 
	- This can be text or **JSON** 
		- **How to receive response as JSON:** 
```javascript
/** Fetch the data for all cupcakes */
async function getCupcakes() {
	const resp = await fetch('/api/cupcakes');
	const apiData = await resp.json();
	//Note: if want text instead of JSON, use: await resp.text();
	return apiData.cupcakes;
}
```

#### Sending Data Process 
1. Listen for event that triggers sending data 
```javascript
/** Handling form submission */
async function handleCupcakeForm(evt) {
	evt.preventDefault(); //Prevents browser's default to send the form. Want JS to send the form 
	const cupcake = parseFormData();
	await addCupcake(cupcake);
	location.reload();
}
```
3. Await response via fetch ('endpoint') and include **method, headers, body**
```javascript
async function addCupcake(cupcake) {
	console.log("addCupcake");
	const resp = await fetch('/api/cupcakes', {
	method: "POST",
	headers: {
		"Content-Type": "application/json"
	},
	body: JSON.stringify(cupcake)
	}
	);
	const apiData = await resp.json(); //Awaiting value of response 
}
```

## How to Get Values from the DOM out of WT Forms 
- WT Forms auto-creates form id  and form input id values 
	- Check the Elements tab in console for values 

### Handling Form Data 
1. Create variables for the DOM query selectors of the form 
```javascript
const $cupcakeForm = document.querySelector('.cupcake-form');
```
2. Create a start function that has an event listener that listens for form submission 
```javascript
function parseFormData() {
	const flavor = document.querySelector('#flavor').value;
	const size = document.querySelector('#size').value;
	const rating = document.querySelector('#rating').value;
	const image_url = document.querySelector('#image_url').value;
	
	return { flavor, size, rating, image_url };

}
```




# Communication between Flask server and API / Databases 

- Creating server routes endpoints, decorators 
- How to update data in database using SQL alchemy 
	- what are the base level things that need to be there 

### How to create forms / render templates with Jinja / Flask 
- WTF will auto-create id's for html attributes 
- can reference those: see cupcakes 
- add script to jinja 
```javascript 

function parseFormData() {
	const flavor = document.querySelector('#flavor').value
	const size = document.querySelector('#size').value;
	const rating = document.querySelector('#rating').value;
	const image_url = document.querySelector('#image_url').value;
	
	return { flavor, size, rating, image_url };

}
```

```jinja 
{% extends 'base.jinja' %}
<h1>Add Cupcakes</h1>

<form class="cupcake-form" method="POST">

{{ form.hidden_tag() }} <!--add type=hidden form fields -->
{% for field in form
if field.widget.input_type != 'hidden' %}
<p>
{{ field.label }}
{{ field }}

{% for error in field.errors %}
{{ error }}
{% endfor %}

</p>

{% endfor %}

<button type="submit">Submit</button>

</form>


<script type="module">
import { start } from "../static/cupcakes.js";
start();
</script>
{% endblock %}
```

WTF Forms can also be used for form validation as a class 
- can set the html class as the form's class 
- use the form class to do validation 
- WTF forms makes the id's for all the inputs 
	- can check element console to see what those are 



# Testing Strategies Flask Python 

Updating Item 
```python
def test_update_cupcake(self):

q = db.select(Cupcake)
self.assertEqual(len(dbx(q).scalars().all()), 1) #check to see if length of cupcake query remains as expected 

with app.test_client() as client:
url = f"/api/cupcakes/{self.cupcake_id}"

#define what is being updated 
updated_cupcake = {
	"rating": 7
}

resp = client.patch(url, json=updated_cupcake)

self.assertEqual(resp.status_code, 200)

self.assertEqual(resp.json, {
	"cupcake": {
	"id": self.cupcake_id,
	"flavor": "TestFlavor",
	"size": "TestSize",
	"rating": updated_cupcake['rating'],
	"image_url": "http://test.com/cupcake.jpg"
	}

})

q = db.select(Cupcake)
self.assertEqual(len(dbx(q).scalars().all()), 1) #check to see if length of cupcake query remains the same 
```

Deleting Item 
```javascript
def test_delete_cupcake(self):

q = db.select(Cupcake)

self.assertEqual(len(dbx(q).scalars().all()), 1)

  

with app.test_client() as client:

url = f"/api/cupcakes/{self.cupcake_id}"

  

resp = client.delete(url)

  

self.assertEqual(resp.status_code, 200)

  

self.assertEqual(resp.json, {"deleted": self.cupcake_id})

  

q = db.select(Cupcake)

self.assertEqual(len(dbx(q).scalars().all()), 0)
```