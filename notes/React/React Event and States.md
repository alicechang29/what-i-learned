- changing state will re-render 

MoodRing.jsx
```jsx

function MoodRing({ initalMood="jubilant" }){
const [mood, setMood] = useState(initialMood); 
	//"hook" must be INSIDE the component. 

//If state changes, React will rerun the component to re-render the page = re-run the function - MoodRing() 

function makeSad(){
	setMood("sad"); 
}

return (
	<div>
		<div> You are {mood}</div>
		<button onClick={makeSad}>Be Sad </button> 
	</div> 
); 

}
```

App.jsx
```jsx

function App(){
	return (
		<div className="App">
			<MoodRing initialMood={"happy"} />
			<MoodRing initialMood={"meh"} />
			<MoodRing />
		</div>

	);
}
```