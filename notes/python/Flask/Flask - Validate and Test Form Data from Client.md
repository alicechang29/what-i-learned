WT Forms can be used to validate form data that is submitted from the client. 
	see ShareBnB project 

1. **Create WTForms for form validation** 

schemas/forms.py
```python
from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import InputRequired, Email, Length
from flask_wtf.file import FileField

class UserRegistrationForm(FlaskForm):
"""Form for validating user registration inputs."""

username = StringField(
	"username",
	validators=[InputRequired()]
)

email = StringField(
	"email",
	validators=[
		InputRequired(),
		Email(),
	]
)

password = StringField(
	"password",
	validators=[
		InputRequired(),
		Length(min=8)
	]
)
```


2. **Create route within app.py** 

app.py
```python
from flask_cors import CORS
from schemas.forms import UserRegistrationForm
from dotenv import load_dotenv
from models import User
from flask_wtf.csrf import CSRFProtect

app = Flask(__name__)
CORS(app)
csrf = CSRFProtect(app)
load_dotenv()
db.init_app(app)
jwt = JWTManager(app)

# Need all of that ^^^ 

@app.post("/register")
def register():
"""
POST /register
Takes in form data and validates.
Registers user and returns JWT token which can be used to authenticate
further requests.
Returns JSON {access_token: token}
"""

#this is how form data comes in 
user_data = request.form 

username = user_data["username"]
email = user_data["email"]
password = user_data["password"]

form = UserRegistrationForm(
	username=username,
	email=email,
	password=password,
)

if form.validate():
	# saving to DB 
	# FIXME: add in try/excepts
	User.register(
		username,
		email,
		password
	)
	
	access_token = create_access_token(identity=email)
	response = {"access_token": access_token}
	return jsonify(response)

else:
	return jsonify({"errors": form.errors})

```


3. **Go to Insomnia and set body to Multipart Form to test the route** 

![[Screenshot 2024-06-16 at 10.25.01 PM.png]]