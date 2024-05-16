**Thinking Process:** 
1. How should the program work? 
	1. write a very clear docstring 
2. does it do those things? "instrumenting"
	1. print out the outputs 
3. find a way to split the problem 
	1. use insomnia to make a request to backend 
		1. if the error is there, then can rule out the frontend 
	2. when rendering a template, send all the values to visibly see things 
4. talk out the problem, how to explain the problem to someone news 
5. go outside, make a drawing 
6. once you "find the bug", determine if it was ACTUALLY the bug 
	1. did i save the file 
	2. am i accessing the right place 
	3. once i "find the bug", uncomment it out and see if it was the thing that actually fixed the bug 
	4. if i am still confused about the bug, then i might not have found/understood the bug 


**Actual Steps - Express/Node:** 
1. close existing server 
2. open debugger terminal
3. open server using `node --watch server.js`
4. add a `debugger;` where i want to stop 
5. run the route (insomnia or in browser)
7. next -- brings me into the next line 
8. step into -- shows me what variables, etc I have and what the values are 




10. don't look at the last thing was worked on
	1. if in the ui, go back to the model 
	2. then the route 
	3. then to the ui 
11. go back to the beginning of the flow:
	1. does everything i expect to get matching what i am actually getting? 
	2. add in breakpoints right before the issue starts 
	3. can see any variables and its' value before the breakpoint 


12. Comment out everything 
13. go line by line and un comment until i find the thing that breaks 

To test API route: 
1. put route into insomnia 
2. add print statement to route 
```python

def request_lucky_num_fact():

"""Return random number and fact about the number from Numbers

API as {"num":{"fact", "num"}}.

"""
response = requests.get(f"{API_BASE_URL}random/trivia?json")

print("!!!!!URL SENT", f"{API_BASE_URL}random/trivia?json")

parsed_response = response.json()

print("!!!parsed", parsed_response)

fact = parsed_response['text']

print("!!!FACT", fact)

num = parsed_response['number']

print("!!!NUM", num)

print("!!!!!return state", {"num": {"fact": fact, "num": num}})

return {"num": {"fact": fact, "num": num}}
```
1. check terminal to see print statement 