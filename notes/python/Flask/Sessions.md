# Sessions
- Sessions contain info unique to each browser
    - will auto-update based on cookie info
- Cookies contain strings that are stored by browser

Cookie Process:
1. visit site
2. Server tells client(browser) to store cookies
3. Client sends cookies to server with each request made


## How to use Sessions in Flask
1. Import session from Flask
```python
from flask import Flask, session
app = Flask(__name__)
app.config["SECRET KEY"] = "aksdjf;akd"
```

2. Within routes, treat session as a dictionary
```python
@app.post('/')
def some_route():
    session['fav-num'] = 42
    return
```

3. To get value out of a session
```python
@app.get('/')
def my_route():
    return {session['fav-num']}
```

#### Can also use `session.get()`
- session.get() is referencing the RESPONSE object which contains:
    - status code, headers, content about the response

see flask-survey (4/25/24)
```python
RESPONSES_KEY = "responses"

@app.get("/questions/<question_index>")
def show_question(question_index):
    """
    Displays the current survey question
    """
    #Getting the values out of responses variable
    #Can see in flask debugger > Request Vars > Session Variables
    responses = session.get(RESPONSES_KEY)

```
notes/python/Flask/sessionsget.png



## How to Append Values to a Session List
1. Get the List
`fruits = session['fruits]`

2. Add to list
`fruits.append('cherry')`

3. Reassign items to sessions
`session['fruits'] = fruits`