# Setup and Testing for Python Projects

## Setting Up Virtual Environment
- Initial setup is same for Python, Flask, Jinja

1. cd into project directory

```shell
my_dir $ python3 -m venv venv

my_dir $ source venv/bin/activate

(venv) my_dir $ pip3 install flask setuptools

(venv) my_dir $ pip3 install ipython

(venv) my_dir $ pip3 install flask-debugtoolbar

pip3 install psycopg2-binary flask-sqlalchemy

pip3 install flask-wtf

pip3 install requests

pip install python-dotenv 

(venv) my_dir $ pip3 freeze > requirements.txt

(venv) my_dir $ git init

(venv) my_dir $ git status



```

2. Create a `.gitignore` file in the directory

```shell
(venv) my_dir $ touch .gitignore

(venv) my_dir $ git status
```

3. Open VS Code and Add `venv/` ,`.env` to the `.gitignore` file

4. Save and Close VS Code

5. Re-open VS code and check that `venv` is in bottom right corner being used


## Opening and Downloading Requirements.txt
- Do this every time pulling from Git if working in shared project

```shell
$ source venv/bin/activate
(venv) $ pip3 install -r requirements.txt
```

Check if I have all the requirements 
```shell
(venv) $ pip3 freeze
```

## Deactivate Virtual Environment

```shell
$ source venv/bin/activate
(venv) $ deactivate
```

# Install Flask
```shell
(venv) my_dir $ pip3 install flask setuptools

```

## Adding Flask Debug Toolbar
- Inside app.py

```python
from flask import Flask, request, render_template

from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)

app.config['SECRET_KEY'] = "oh-so-secret"

debug = DebugToolbarExtension(app)
```

## Running Flask Server
- switch port to 5001
- copy given url into browser
```shell
$ flask run -p 5001

(venv) my_dir $ flask run
```

# Running Tests

**Doctests:** 

```shell
my_dir $ python3 -m doctest -v [filename.py]
```

**Unittests:** 
```shell 
my_dir $ python3 -m unittest -v [filename.py]
```
## Testing in iPython 
1. Navigate to same directory that the file is in 
2. Open ipython 

```shell
my_dir $ ipython 

from [file] import [Class]
from calculator import Calculator 
```


# Setup for SQL Alchemy 

```python 

import os
from flask import Flask, request, redirect, render_template
from flask_debugtoolbar import DebugToolbarExtension
from werkzeug.exceptions import NotFound

from models import db, dbx, Movie, Studio #swap out these classes depending on project 

app = Flask(__name__)

#NOTE it is URI, not URL  
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get( 
    "DATABASE_URL", 'postgresql:///sqla_movies') #swap this out depending on DB being used  
    
app.config['SQLALCHEMY_ECHO'] = True
app.config['SQLALCHEMY_RECORD_QUERIES'] = True
db.init_app(app)
```



## Testing SQL Alchemy 
1. Create a test database 
2. Copy over the test files from sql-relationships-demo / blogly exercise 

testing app.py 

```python 
import os
from unittest import TestCase

os.environ["DATABASE_URL"] = "postgresql:///sqla_movies_test"
os.environ["FLASK_DEBUG"] = "0"

from app import app
from models import db, dbx, Movie, Studio

# Make Flask errors be real errors, rather than HTML pages with error info
app.config['TESTING'] = True
app.app_context().push()
db.drop_all()
db.create_all()

```

```shell
my_dir $ python3 -m unittest -v [filename.py]
```


3. copy over test files for testing models 

```python 

import os
from unittest import TestCase

os.environ["DATABASE_URL"] = "postgresql:///sqla_movies_test"
os.environ["FLASK_DEBUG"] = "0"

from app import app
from models import db, dbx, Movie, Studio

app.app_context().push()

db.drop_all()
db.create_all()

```

3. Run the unittests 




### When adding a new table to the database: 

**need to repush the changes** **in ipython** 
```ipython 
%run app.py
app.app_context().push()
```


## Install FLASK WT-Forms 

```shell 
(venv) $ pip3 install flask-wtf
```

1. **forms.py -- Define a form class** 
```python 
from flask_wtf import FlaskForm
from wtforms import StringField, FloatField 

class AddSnackForm(FlaskForm):
    """Form for adding snacks."""

    name = StringField("Snack Name")
    price = FloatField("Price in USD")
```

2. **app.py -- Add a form route handler** 

```python 
from forms import AddSnackForm, UserForm

@app.route("/add", methods=["GET", "POST"])
def add_snack():
    """Snack add form; handle adding."""

    form = AddSnackForm()

    if form.validate_on_submit():
        name = form.name.data
        price = form.price.data
        # do stuff with data/insert to db

        flash(f"Added {name} at {price}")
        return redirect("/add")

    else:
        return render_template(
            "snack_add_form.jinja", form=form)
```

3. **jinja template** 
```jinja

<form id="snack-add-form" method="POST">
  {{ form.hidden_tag() }} <!--add type=hidden form fields -->

  {% for field in form
         if field.widget.input_type != 'hidden' %}

    <p>
      {{ field.label }}
      {{ field }}

      {% for error in field.errors %}
        {{ error }}
      {% endfor %}
    </p>

  {% endfor %}

  <button type="submit">Submit</button>
</form>
```

### WTF Forms Best practices 
- Make distinct add/edit forms, if sensible
- Add lots of form validation, if appropriate
- All non-GET routes return redirect (not render_template) on success
### Testing in WTF Forms 
tests.py  - turn off the CSRF security token check 
```python 
app.config['WTF_CSRF_ENABLED'] = False 
```

tests.py 
```python 
class SnackViewsTestCase(TestCase):
    """Tests for views for Snacks."""

    def test_snack_add_form(self):
        with app.test_client() as client:
            resp = client.get("/add")
            html = resp.get_data(as_text=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn('<form id="snack-add-form"', html)

    def test_snack_add(self):
        with app.test_client() as client:
            d = {"name": "Test2", "price": 2}
            resp = client.post("/add", data=d, follow_redirects=True)
            html = resp.get_data(as_text=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn("Added Test2 at 2", html)
```


## Setting Up External Web API's - Flask 

1. install python library into shell 
```shell 
(venv) $ pip install python-dotenv
```

2. create an .env file 
```env
API_SECRET_KEY=this-is-secret
```

3. add .env into .gitignore file 

4. setup app.py 
```python 
from dotenv import load_dotenv
load_dotenv()
API_SECRET_KEY = os.environ['API_SECRET_KEY']
```


### Using the External Web API's 

**Sending HTML to front-end** 

```python 

@app.get("/book-info")
def show_book_info():
    """Return page about book."""

    isbn = request.args["isbn"]

    resp = requests.get("http://some-book-api.com/search",
        params={"isbn": isbn, "key": API_SECRET_KEY})

    book_data = resp.json()

    # using the APIs JSON data, render full HTML page
    return render_template("book_info.jinja", book=book_data)
```

**Sending JSON to front-end** 

```python 

@app.get("api/book-data")
def get_book_info():
    """Return info about book."""

    isbn = request.args["isbn"]

    resp = requests.get("http://some-book-api.com/search",
        params={"isbn": isbn, "key": API_SECRET_KEY})

    book_data = resp.json()

    # using the APIs JSON data, return that to browser

    return jsonify(book_data)
```


## Setting up Seed File 

1. Create the seed.py file 
2. Create a database 
```shell
createdb [dbname]
```
3. go to ipython within VENV 
```python
%run seed.py
```

