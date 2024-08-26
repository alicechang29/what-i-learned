
**Initial Steps** 
1. Set Breakpoints 
2. Narrow down the scope of where the problem is 
3. Step Into the code 

**Process of Elimination** 
- How should the program work? 
	- Write down my expectations 
	- Print outputs 
- Is this bug happening locally? 
	- Restart Server 
	- Did I save the file? 
	- Am I accessing it correctly? 
- Did something change with a library or API? 
	- Check if library version was updated recently 
	- Review release notes 
	- Compare prev version to new version 
	- Set Breakpoints 
- Can I split the problem? 
	- Make a request to the backend via Insomnia. If error is there, rule out the front end 
	- When rendering, send all the values 
- Am I clear about how the bug is happening? 
	- If not, repeat ^^ 
- Last resort, comment out everything and go line by line 

