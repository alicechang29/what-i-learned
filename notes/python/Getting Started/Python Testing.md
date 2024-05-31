SEE flask-testing-demo folder (rithm>lectures>flask-testing-demo) 
Pay attention to the COMMENTS 
# DocTest 
- keeps tests close to the code 
- Too many tests can drown out the code 
- help people visualize how to use the function 

## Write DocTest 

```python

def adder(x, y):
    """Adds two numbers together.

        >>> adder(1, 1)
        2

        >>> adder(-1, 1)
        0
    """

    return x + y
```

## Run DocTest 

```shell 
python -m doctest arithmetic.py #no output if ran successful  

python -m doctest -v arithmetic.py #output 
```

# Unit Testing 
- Good for when you have lots of tests 
- or interesting hierarchies of tests 

## Write `unittest` 

1. Import TestCase class 
```python

from unittest import TestCase 
```

2. Create a subclass of TestCase class 
```python
class AddTestCase(TestCase)
	def test_adder(self): #must always start with test_[name]
		self.assertEqual(adder(2,2,)4)
```

3. Pick a Test Case Assertion 

|Method|Checks that|
|---|---|
|assertEqual(a, b)|a == b|
|assertNotEqual(a, b)|a != b|
|assertTrue(x)|bool(x) is True|
|assertFalse(x)|bool(x) is False|
|assertIs(a, b)|a is b|
|assertIsNot(a, b)|a is not b|
|assertIsNone(x)|x is None|
|assertIsNotNone(x)|x is not None|
|assertIn(a, b)|a in b|
|assertNotIn(a, b)|a not in b|
|assertIsInstance(a, b)|isinstance(a, b)|
|assertNotIsInstance(a, b)|not isinstance(a, b)|

## Run `unittest`

```shell 
python3 -m unittest NAME_OF_FILE
```

# Integration Testing 

1. Import TestCase and Import app 
```python
from unittest import TestCase
from app import app
```

2. Add in `app.config['TESTING'] = True` above testing class 

3. Add in a `test_client` 
	- Allows for testing routes -- simulates a server without having to start up a real server 


```python 
#Testing 
app.config['TESTING'] = True

class ColorViewsTestCase(TestCase):
    """Examples of integration tests: testing Flask app."""

    def test_color_form(self):
        with app.test_client() as client:
            # can now make requests to flask via `client`
```

4. Include response and html 
5. Include assertions 
### Testing GET Request 
```python
#What's being tested 




#Test
def test_color_form(self):
    with app.test_client() as client:
        # can now make requests to flask via `client`
        resp = client.get('/')   

		#dig into data and get html as Text 
		#gives access to html contained in the response 
        html = resp.get_data(as_text=True)

		#make assertions - assure that status code is 200 
        self.assertEqual(resp.status_code, 200)
        
        #assure that this h1 string is inside html string         
        self.assertIn('<h1>Color Form</h1>', html)
```

### Tip for Testing HTML 

1. Put a comment in HTML 
```html
<!--Homepage for testing purposes-->
```
2. In python test case, search for the html comment 
```python
def test_color_form(self):
    with app.test_client() as client:
        # can now make requests to flask via `client`
        resp = client.get('/')   

		#dig into data and get html as Text 
		#gives access to html contained in the response 
        html = resp.get_data(as_text=True)

		#make assertions - assure that status code is 200 
        self.assertEqual(resp.status_code, 200)
        
        #assure that the comment is inside html string    ## HERE!!!     
        self.assertIn('<!--Homepage for testing purposes-->', html)

```
### Testing POST Request 

```python 
#What's being tested 




#Test
def test_color_submit_specific_season(self):
    with app.test_client() as client:

		#make a post request to '/fav-color' endpoint 
		# and send the data just like the way data looks 
	    resp = client.post(
		    '/fav-color',
		    data={'color': 'blue'})
		#give back html info out of the response 
		html = resp.get_data(as_text=True)

		# make assertions 
        self.assertEqual(resp.status_code, 200)
        self.assertIn('Wow! I like blue, too', html)
        self.assertIn('The season for blue is summer', html)
```

### Testing Redirects 

**Testing the Redirect** 
- note: the status code is 302 

```python 
#What's being tested 
@app.get('/redirect-me')
def redirect_me():
	"""Redirect user to homepage."""
	return redirect("/")

#Test
def test_redirection(self):
    with app.test_client() as client:
        resp = client.get("/redirect-me")

        self.assertEqual(resp.status_code, 302)
        self.assertEqual(resp.location, "/")
```


**Testing the Redirect AND the page that is being redirected to:**
- note: the status code is 200 

```python 
#What's being tested 
@app.post('/fav-color')
def show_color_info():
	"""Show fav color & its season."""
	color = request.form['color']
	season = get_season_for_color(color)
	
	return render_template(
		"color.jinja",
		fav_color=color,
		season=season)

#Test
def test_redirection_followed(self):
    with app.test_client() as client:

#follow_redirects=True tells test client to make a subsequent request to the re-direct location 
	    resp = client.get("/redirect-me", follow_redirects=True)

#html from the page that is being redirected to 
	    html = resp.get_data(as_text=True)

        self.assertEqual(resp.status_code, 200)
        self.assertIn('<h1>Color Form</h1>', html)
```

### Testing Sessions 

**Test the value of the Session**

```python 
#What's being tested 
@app.get('/')
def index():
	"""Show homepage."""
	# Keep a count of how many times page is visited
	session['count'] = session.get('count', 0) + 1
	
	return render_template("index.jinja")



#Test
def test_session_info(self):
    with app.test_client() as client:
        resp = client.get("/")

        self.assertEqual(resp.status_code, 200)
        self.assertEqual(session['count'], 1)

```

**To set the session before the request**

```python 
#What's being tested 
@app.get('/')
def index():
	"""Show homepage."""
	# Keep a count of how many times page is visited
	session['count'] = session.get('count', 0) + 1
	
	return render_template("index.jinja")



#Test
def test_session_info_set(self):
        with app.test_client() as client:
            # Any changes to session should go in here:
            with client.session_transaction() as change_session:
	            #setting session value to 999 before route is visited
	            change_session['count'] = 999
	            
            # Now those changes will be in Flask's `session`
            #make a get request to the root route 
            resp = client.get("/")
            
            self.assertEqual(resp.status_code, 200)

			#session value after route is visited 
            self.assertEqual(session['count'], 1000)
```


# setUp and tearDown 
- methods are called before/after each test 

Runs in order: 
1. setUp, test_1, tearDown 
2. setUp, test_2, tearDown 

```python 
class FlaskTests(TestCase):

  def setUp(self):
      """Stuff to do before every test."""

  def tearDown(self):
      """Stuff to do after each test."""

  def test_1(self):
      ...

  def test_2(self):
      ...
```

