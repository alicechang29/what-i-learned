
- Determining issue in code vs with API (applicant portal page)
	- I was working on applicant portal and when I refreshed the page, it was working 
	- After I read through the logs, I realized that the error was related to a component I didn't touch 
	- Error said that there was a value that was undefined 
	- I was confused bc the value that had the issue could never be undefined and if it was, it would've been caught by typescript 
	- Deduced that the only way that it could be undefined was if it was in the API response 
	- Checked to see if the API sometimes returns undefined and it didn't 
	- Realized that it meant my backend wasn't including the field at all - which resulted in me updating my backend so that the field could now exist 
```
Unexpected Application Error! Cannot read properties of undefined (reading 'filter') TypeError: Cannot read properties of undefined (reading 'filter') at CollegeDeliverableSectionGroup 
```
- Solo day for SIS 
	- Had a relatively simple ticket which was to update the UI 
	- spent 8 hours trying to figure out how to write tests 
	- thought I was being clever by using a factory that could generate all my instances 
	- later found out the factory should only be used to generate fake db 
- Found a missing relationship between 2 entities 
	- Confirmed with VP that there is a missing relation 
	- Made enhancement to the schema so that they would be connected
		- lookup_type.id 
	- Now there is access between relationship with 
		- table of relationships 
			- student 
			- parent 
		- applicant users 
	- **Find the impact** 