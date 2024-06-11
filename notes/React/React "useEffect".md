# What is an "Effect"
- Doing something after a render/re-render that is unrelated to a render 
	- Changing parts of DOM not covered by React 
	- Async operations when **component is mounted** 
		- **Mounted** = when instance of component is rendered for the first time 
```jsx

<Todo task = "Task1" /> //Mounted when component renders for first time

//later on, if changing PROP, NOT MOUNTED 
<Todo task = "Task1Edited" />
```


# Options for useEffect 

`useEffect(callback fn)`
- Runs effect after **every** render 

`useEffect(callback fn, [productId, userId])`
- Runs effect **only if variables specified within array have changed** - changed as in `===` 

`useEffect(callbackfn, [])`
- Runs effect **only once** on mount 

# Use Cases 

## Getting data via AJAX on mount
- When component renders, fetch data from API 
- Possibly want to show user a loading message while data is being fetched: 
	- 1. Have effect that only runs once 
	- 2. Inside effect, when API call is finished, set state and re-render 

- **Callback fn passed to useEffect CANNOT be async.** 
- **CAN have an async fn INSIDE the callback fn** 

#### Steps 
1. Define async function inside useEffect callback 
2. Call the async function 

```jsx
function ProfileViewer() {
  const [profile, setProfile] = useState({
    data: null,
    isLoading: true
  });

  useEffect(function fetchUserWhenMounted() {    
	  async function fetchUser() {      
		  const response = await fetch(URL);
	      const userResult = await response.json();
	      setProfile({
	        data: userResult,
	        isLoading: false
	      });
	    }
	    fetchUser(); //<-- call fetchUser myself 
	    
	}, [ ]); //<-- runs effect only once upon mount 

  if (profile.isLoading) return <i>Loading...</i>;

  return (
      <div>
        <b>{profile.data.name}</b>
      </div>
  );
}

```

### Error Handling 
- use Try/Catch 

```jsx

function ProfileViewer() {
  const [profile, setProfile] = useState({
    data: null,
    isLoading: true,
    errors: null,
  });

  useEffect(function fetchUserWhenMounted() {
    async function fetchUser() {
      try {
        const response = await fetch(URL);
        const userResult = await response.json();
        setProfile({
          data: userResult,
          isLoading: false,
          errors: null,
        });
      } catch (err) {
        setProfile({
          data: null,
          isLoading: false,
          errors: err,
        });
      }
    }
    fetchUser();
  }, []);

  if (profile.isLoading) return <i>Loading...</i>
  else if (profile.error) return <b>Oh no! {error}</b>
  return ( <div>... stuff using data ...</div> )
}
```


## Updating Data after Dependency Changes 
- eg: fetch data based on form data 

```jsx

function ProfileViewerWithSearch() {
  const [username, setUsername] = useState("elie"); //passing data from a form 
  const [profile, setProfile] = useState({data: null, isLoading: true});

//put in a console log 

  useEffect(function fetchUserOnUsernameChange() {
  console.log("effect run when username changes"); 
  
    async function fetchUser() {
      const response = await fetch(`${BASE_URL}/${username}`);      
      const userResult = await response.json();
      setProfile({data: userResult, isLoading: false});
    }
    fetchUser(); //<-- calling async fn 
  }, [username]); // <-- useEffect invoked when username is changed 

// any time someone searches for username, it will run this fn 
  function search(username) {
    setProfile({data: null, isLoading: true});
    setUsername(username);
  }

  if (profile.isLoading) return <i>Loading...</i>

  return (
      <div>
        <ProfileSearchForm search={search} />
        <b>{profile.data.name}</b>
      </div>
  );
}
```

