
# How to Test 

## Flask 

### API Routes 
**Check API route via Terminal and Insomnia** 
- Write api route -- see app.py from flask-2 
- Put a print statement inside api route 
- Put route inside insomnia 
- Open a server in terminal: `flask run -p5001`
- Make a request to the route via insomnia 
- See the print statements in the terminal 
https://www.youtube.com/watch?v=64drRhABsRs


### Database / SQL Alchemy 
**Testing DB with SQL Alchemy and iPython** 
https://youtu.be/9jFnuhIyE0Q 

### How to Run Tests with Flask 
obsidian://open?vault=notes&file=python%2FPython%20Testing 

## SQL Alchemy / Flask Testing Strategies 

### Best Practices 
- Don't want to separate the UI from the DB 
	- If dividing tests, divide it by Routes 
		- see blogly, not blogly solution 
- Testing HTML Jinja Flask routes
	- put a html comment in the template 
	- 
```python
def test_list_users(self):

with app.test_client() as c:
	resp = c.get("/users")
	self.assertEqual(resp.status_code, 200)
	html = resp.get_data(as_text=True)
	self.assertIn("test1_first", html)
	self.assertIn("test1_last", html)
	self.assertIn("<!-- Test comment for user_listing -->", html)
```


### Testing with a DB (blogly)

1. Run tests.py before running app.py so that the DB can be created for the testing can be created by setting the os.environ (environmental variable )

within app.py, there is this line: 
```python 
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get(

"DATABASE_URL", 'postgresql:///blogly')
```
where it is setting to DATABASE_URL if it exists, else going to real DB 

2. In tests.py, it is setting the DATABASE_URL 

```python 
os.environ["DATABASE_URL"] = "postgresql:///blogly_test"
```

Can also run it in terminal: 
![[Screenshot 2024-05-03 at 9.49.30 AM.png]]



**TESTS AVAILABLE** 
- warbler solution 
- pet adopt 
- sql relationships demo 