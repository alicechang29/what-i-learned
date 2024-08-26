## Purpose of Unit Tests? 
- Promotes readability in the codebase 
- Developers can view a test and know what the code is supposed to do 
- "Documentation" for the code 


### Table Driven Tests 

**Use when:** The only thing that is changing is the **data**. 
- Nothing else is changing - the process is static. 

Let's say we have the function `updateFavColor`

```js
const users = [
  {
    user_id: '1',
    user_name: 'Taylor Swift',
    user_age: '27',
    user_fav_color: 'red',
    last_location: 'San Francisco',
    lat: '37.774929',
    long: '-122.419416'
  },
  {
    user_id: '2',
    user_name: 'Idris Elba',
    user_age: '58',
    user_fav_color: 'green',
    last_location: 'Washington - DC',
    lat: '38.89565',
    long: '-76.943174'
  }
]

function updateFavColor(userId, color){
	for(let user of users){
		if (user.user_id === userId){
			user.user_fav_color = color; 
			return "updated color"; 
		}
	}
	return "no such user."
}

```

We could test `updateFavColor` by writing a bunch of if statements... 
```js

function testUpdateFavColor(userId, color){
	updateFavColor(2, "blue"); 
	if(users[1].user_fav_color !== "blue") return "test failed"; 
	if(users[0].user_fav_color !== "red") return "test failed"; 
	//etc... 
	return "test passed"; 
}
```

But this is inefficient. 

