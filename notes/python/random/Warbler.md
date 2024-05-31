# Part 1: 

**Fix user profile (blogly)**
index.jinja
- line 89 - user.bio 
- line 92 - user.location 
- line 5 - add img src to warbler-hero div 

**Fix User cards** 
detail.jinja 
- line 89 (user.bio)

followers.jinja
- line 22(follower.bio)

following.jinja 
- line22(followed_user.bio)

index.jinja
- line26 (user.bio) 


**Profile edit** 

Route updates: 
```python 
@app.post('/users/<int:user_id>/edit')
def users_update(user_id):
    """Handle form submission for updating an existing user"""

    user = db.get_or_404(User, user_id)
    user.first_name = request.form['first_name']
    user.last_name = request.form['last_name']
    user.image_url = request.form['image_url']

    db.session.add(user) #THIS SHOULD BE AN UPDATE 
    db.session.commit()
    flash(f"User {user.full_name} edited.")

    return redirect("/users")
```

Password: 
- Follow the pattern of signup form for checking for existing username 
- NEED TO DO A db.session.rollback() first to integrety error for both signup and profile edit 
	- username property on User model has unique constraint 
	- becasue : in base.jinja 
		- when it returns and renders the template, 
		- it is trying to access g.user 
		- g.user doesn't exist anymore in the db because username has changed 
		- "fouled transaction"
			- tried to commit a name change to the db and that failed 
			- next thing is to rollback to the safe point, back to when transaction was started 
			- eg: 2 updates for checking/savings 
				- if whole thing doesn't succeed, the whole thing will fail 
- Hash the password  -- look on classes on the model 
- password demo: 
```python 
@app.route("/register", methods=["GET", "POST"])

def register():

"""Register user: produce form & handle form submission."""
form = RegisterForm()
	if form.validate_on_submit():
	name = form.username.data
	pwd = form.password.data
	# adding new user into db
	
	# User.register method is hashing the password
	user = User.register(name, pwd)
	db.session.add(user)
	db.session.commit()
	
	# putting the user_id into the session so that the we can remember who is logged in
	
	# browser is stateless
	session["user_id"] = user.id
	# on successful login, redirect to secret page (authenticated)
	return redirect("/secret")

else:
	return render_template("register.jinja", form=form)
```


**Fix homepage** 
- Current user: g.user
- find all users that current user follows 
- get all posts from those users, order by newest 
	- get only first 100 of those posts 
```python 

q = (
	db.select(Message)
	.where()
	.order_by(Message.timestamp.desc())
	.limit(100)

)
```

**How to write this in SQL:** 

```sql 

select m.id, f.user_being_followed_id as following, m.user_id as author, f. user_following_id, m.timestamp
	from messages m 
	join users u 
		on u.id = m.user_id
	join follows f 
		on f.user_being_followed_id = u.id 
	where f.user_following_id = 89 
	order by m.timestamp desc 
	limit(100); 
	

```


**SQL Alchemy** 

- i want messages whose user_id belong in the list that the current user follows 
	- get out all the users who the current user follows 
	- curr_user = g.user 
	- curr_user.following 
https://www.geeksforgeeks.org/how-to-use-the-in-operator-in-sqlalchemy-in-python/#

```python 
>>> curr_user = g.user #for prod,not testing (db.session.get(User,89)))
 # <User #89: krista73, andersenjeffrey@example.com>
>>> curr_user_following = curr_user.following
 #[<User #10: andrew44, diana32@example.net>,<User #21: zachary57,brian97@example.net>]
> followerids = []
>
# instead of looping: 
>>> for user in curr_user_following: 
>>> 	followerids.append(user.id)

# Can use LIST COMPREHENSION (work on right hand side first and then add on what I want to select on the left hand side )
followed_ids = [followed.id for user in g.user.following]


>>> q = (db.select(Message) .where(Message.user_id.in_(followerids)) .order_by(Message.timestamp.desc()) .limit(100) )


>>>messages = dbx(q).scalars().all()
 #[<Message 243>, <Message 331>, <Message 479>]

#get out all the message details: 
for m in messages:
	print(m.text)

q = (db.select(Message).where(Like.me))

```

how to write list comprehension :
- think about the right hand side 
- select what you want 
- for user in user instance 


# Part 2: add likes 


Model updates: 
- add a "liked" messages list to the user table 

Route updates: 
- 1 post request 
	- similar to follow / unfollow 

add a heart button to all messages where message author !== current user 

To turn on / off button: allow toggle (add a class)

if heart button is ON: 
- allow user to dislike it 
	- POST request -  removes message from list of likes from current user 
if heart button is OFF 
- allow user to like it 
	- POST request -  add message to list of likes from current user 

- keep track of likes in the DB with a likes list on the user model 
	- list contains message id's 


**Get all the liked message id's out**

```python 
curr_user.likes 
#[<Like 89, 1>, <Like 89, 2>] 

liked_message_ids = [msg.message_id for msg in curr_user.likes]
# [1, 2] 


```

**Steps to insert likes into DB :** 
- psql warbler 
- run sql insert 
- go to ipython 
- %run app.py 
- app.push context 
- db. drop all 
- db. create all 

```sql
INSERT INTO likes (user_id, message_id)VALUES 
(89, 1),
(89, 2);
```

CODE REVIEW 

Edit Profile form 
- labels are missing 