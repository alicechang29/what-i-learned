**Context** 
- Universal data across your application
- Data accessible across all components

**Useful for** 
- Passing a user’s name around
- User currency preferences
- Light or dark mode theme selection
**NOTE: don't treat it as a global variable** 
- If something is important, last thing to do is to store it in a global variable. 
	- if have to pass something down 6 layers, maybe bad design 

**Context is good for cases where lots of different components need incidental access to non-core data and is convenient for them to access easily.** 
- NOT to save you from passing things as props. Passing props is GOOD. 

## Creating Context 

1. Create a Context file 

*userContext.js* 
```js
import { createContext } from "react";
const userContext = createContext();
export default userContext;
```

2. Inside top level component, create the preferences 
3. Wrap all components that should have access to the preferences inside 
`userContext.Provider`
4. Give the context values using the `value` key 

*Jobly.jsx*
```jsx 
import { useState } from "react";
import UserPrefForm from "./UserPrefForm.jsx";
import JobDetail from "./JobDetail.jsx";
import CompanyDetail from "./CompanyDetail.jsx";
import userContext from "./userContext.js";
const DEFAULT_PREFS = {color: "dark", currency: "USD"};

function JoblyApp() {
    const [prefs, setPrefs] = useState(DEFAULT_PREFS);

    function updatePrefs(newPrefs) {
        setPrefs(newPrefs);
    }

    return (
    <userContext.Provider value={{user: null, prefs}}>
	    
		<UserPrefForm submit={updatePrefs} currPrefs={prefs} />
		%% passing prefs to UserPrefForm as a prop bc the PURPOSE of the form is to get the user's preferences rather than reaching out to get this info. %%
		
		<JobDetail />
		<CompanyDetail />
    </userContext.Provider>  );
}
```

5. Access the preferences within the component 

*JobDetail.jsx* 
```jsx
import { useContext } from "react";
import userContext from "./userContext.js";
function JobDetail({ title, description, salary }) {
  const { prefs } = useContext(userContext);
  return (
    <div>
      <h2>Fake Job!</h2>
      <p>You should apply! It pays {prefs.currency} {salary}.</p>    
	</div>
  )
}
```

## Storing User in Context 

```jsx

function JoblyApp() {
  // same as before but also...

  const [user, setUser] = useState(null);

  function login({username, password}) {
    // lots of logic here, but then ...
    const userFromAPI = {get_this_from_api};
    setUser(userFromAPI);
  }

  return (
  <userContext.Provider value={{user, prefs}}>
    {/* same, plus ... */}
    <LoginForm submit={login} />
  </userContext.Provider>
  );
}
```

