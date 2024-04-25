```
greet $ python3 -m venv venv

greet $ source venv/bin/activate
(venv) $

(venv) greet $ pip3 install flask setuptools

(venv) greet $ pip3 install ipython

(venv) greet $ pip3 freeze > requirements.txt

(venv) greet $ git init

(venv) greet $ git status

(venv) $ pip3 install flask-debugtoolbar

```

Flask Debug Toolbar 

Inside app.py 

```
from flask import Flask, request, render_template

from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)

app.config['SECRET_KEY'] = "oh-so-secret"

debug = DebugToolbarExtension(app)
```

