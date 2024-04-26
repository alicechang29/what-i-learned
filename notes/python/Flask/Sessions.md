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

##### Choose a method to get values out of a session 
- Pick based on what I need to return -- Error or None if value doesn't exist 

3. **To get value out of a session**: **Dictionary**
- Treating session as a dictionary: 
	- if the value doesn't exist, it will **ERROR** 
	- This is good if you need a value and need to know it is missing 
```python
@app.get('/')
def my_route():
    return {session['fav-num']}
```

 4. **To get a value out of a session:** `session.get()`
- `session.get()` if the value doesn't exist, it will return **NONE**
	- This is good for following up with **IF/ELSE Statements** 

see flask-survey (4/25/24)
```python
RESPONSES_KEY = "responses"

@app.get("/questions/<int:qid>")

def show_question(qid):

"""Display current question."""

responses = session.get(RESPONSES_KEY)

  
if responses is None:
# trying to access question page too soon
return redirect("/")

  

if len(responses) == len(survey.questions):
# They've answered all the questions! Thank them.
return redirect("/complete")

  

if len(responses) != qid:
# Trying to access questions out of order.
flash(f"Invalid question id: {qid}.")
return redirect(f"/questions/{len(responses)}")

  
question = survey.questions[qid]

return render_template(

"question.jinja", question_num=qid, question=question)

```



## How to Append Values to a Session List
1. Get the List
`fruits = session['fruits]`

2. Add to list
`fruits.append('cherry')`

3. Reassign items to sessions
`session['fruits'] = fruits`