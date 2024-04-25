# Setup and Testing for Python Projects

## Setting Up Virtural Environment
- Initial setup is same for Python, Flask, Jinja

1. cd into project directory

```shell
my_dir $ python3 -m venv venv

my_dir $ source venv/bin/activate

(venv) my_dir $ pip3 install flask setuptools

(venv) my_dir $ pip3 install ipython

(venv) my_dir $ pip3 freeze > requirements.txt

(venv) my_dir $ git init

(venv) my_dir $ git status

(venv) my_dir $ pip3 install flask-debugtoolbar

```

2. Create a `.gitignore` file in the directory

```shell
(venv) my_dir $ touch .gitignore

(venv) my_dir $ git status
```

3. Open VS Code and Add `venv/` to the `.gitignore` file

4. Save and Close VS Code

5. Re-open VS code and check that `venv` is in bottom right corner being used


## Opening and Downloading Requirements.txt
- Do this every time pulling from Git if working in shared project

```shell
$ source venv/bin/activate
(venv) $ pip3 install -r requirements.txt
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

```shell
my_dir $ python3 -m doctest -v [filename.py]
```