
# Bug List 

## Algos
- think through the edge cases... how?  

## API Routes 
- **GET** 
	- Only allowed fields visible 
	- Only authenticated users 
- **POST** 
	-  Only the allowed fields can be updated 
	- Only authenticated users 
- **PUT** 
	- Only the allowed fields can be updated 
	- Only authenticated users 
- **PATCH** 
	- Only the allowed fields can be updated 
	- Only authenticated users 
- **DELETE** 
	- Only authenticated users 

- Testing Views: 
	- testing if item can still be reached by URL even if not visible 
	- If date related, test with: past, present, future 

## Authentication 
- Auth middleware uses verify, not decode 
### Auth Tests 
(see bankly - week 7 hw)
- Unauthorized for login / registration 
	- Bad Username 
	- Bad Password 
	- Bad User/Password 
	- Good User / Bad Pass 
	- Good User / Good Pass 
- 

