`npm install react-router-dom`

`npm run start-be`

**Create the router in highest level component - App** 
```
 return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/drink" element={<Drink/>} />
          <Route path="/eat" element={<Eat/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
```

**Wrap all routes in BrowserRouter component:** 
- when url changes, it will re-render my BrowserRouter, possibly making a different choice
`<Route path="/eat" element={<Eat/>} />`
- will look at what is in the url bar (/eat), it will render the Eat component 

`<Route path="/" element={<Home/>} />`
- will look at what's in url bar (/), renders the homepage 


# URL Params 

App.jsx
```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/users/:id" element={<UserProfile/>} />
</Routes>
```


**useParams hook**

UserProfile.jsx 
```jsx
import { useParams } from "react-router-dom"
import users from "./users.js";

function UserProfile() {
  const { id } = useParams(); 
  const user = users[id];

  if (!user) return <p>No such user: {id}</p>

  return (
      <div>
        <h1>{ user.firstName }</h1>
        <p>Born: { user.birthDate.toLocaleDateString() }</p>
      </div>
  );
}
```

## 2 ways to Re-direct in React

**useNavigate hook** 

```jsx
function Contact() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  //useNavigate gives back a function 

  function handleSubmit(evt) {
    evt.preventDefault();
    navigate("/"); //calling the useNavigate fn 
    
    //upon submit, will change the url route to home page. 
    //When handleSubmit is called, will re-render the page 
  }

  return (
    <div>
      <h1>Get in contact with us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={ email }
          onChange={ evt => setEmail(evt.target.value) } />
        <button>Submit</button>
      </form>
    </div>
  );
}
```

App.jsx

``` jsx
import Nav from "./Nav.jsx";
import RoutesList from "./RoutesList.jsx";
import { BrowserRouter } from 'react-router-dom';

  

function App() {
return (
	<div>
		<BrowserRouter>
			<Nav />
			<RoutesList />
		</BrowserRouter>
	</div>
);
}
```

**Navigate component
```jsx
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import AdminPage from "./AdminPage.jsx";
import Contact from "./Contact.jsx";
import BlogHome from "./BlogHome.jsx";
import Post from "./Post.jsx";

function RoutesList() {

return (
	<Routes>
	
		<Route path="/about" element={<About />} />
		<Route path="/contact" element={<Contact />} />
		<Route path="/users/:username" element={<AdminPage />} />
		<Route path="/blog/:slug" element={<Post />} />
		<Route path="/blog" element={<BlogHome />} />
		<Route path="/" element={<Home />} />
		{/* Everything above ^^^ useNavigate hook */}
		
		<Route path="*" element={<Navigate to="/" />} />
		{/* Navigate component ^^^ */}
	
	</Routes>
);

}
```

Element = "what do you want me to render "


# Testing 

- components that are rendered by router or use any router hooks are difficult to test 
	- Navigate component 
	- BrowserRouter component 

- Need to mock the router using **Memory Router**

```jsx
import { MemoryRouter } from 'react-router-dom';


it('mounts without crashing', function () {
  const { getByText } = render(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>
  );

  const blogLink = getByText(/Blog/i);
  expect(blogLink).toBeInTheDocument();
});
```