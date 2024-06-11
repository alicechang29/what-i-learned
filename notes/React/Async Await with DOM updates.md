![[Pasted image 20240531164516.png]]


1. JS runs code 
2. JS sees an await and adds it to the TODO list ALONG WITH all of the stuff in the remaining parts of the function 
```js

async function startGame(){

	setIsLoading(true); 
	
	const game = await getRandomGame(); 
//JS is adding await getRandomGame(), setIsLoading(false), setDataFromAPI(game) to the TODO list!!!! 
	setIsLoading(false); 	
	setDataFromAPI(game)
}
```
3. JS finishes running code 
4. JS checks the TODO list 
5. JS sees data has returned 
6. JS continues running code from WHERE IT LEFT OFF!!!!
