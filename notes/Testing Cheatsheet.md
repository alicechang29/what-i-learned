
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