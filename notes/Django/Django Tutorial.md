
# Setup 

```shell
#Start Venv 
python3 -m venv venv
source venv/bin/activate
pip3 install -r requirements.txt

#Run ipython: 
python manage.py shell_plus

#Start server: 
python manage.py runserver

```

## Other setup notes 

```shell
# may need to import additional things into ipython if testing 
from assessments.factories import *

# if issues with starting server, may be issues with packages in requirements
# remove versions > save 
pip3 install -r requirements.txt

```


# Create admin model 
```python
class QuestionAdmin(admin.ModelAdmin):

# fieldsets are a visual divider between sets of fields
# The first element of each tuple in fieldsets is the title of the fieldset.

fieldsets = [
	(None, {"fields": ["question_text"]}),
	("Date information", {"fields": ["pub_date"]}),
]
```

# Create a View and URL 
1. Create a view within **polls/views.py** 
2. Create a URL Pattern for the polls view **polls/urls.py**
3. Have the top level URL config point to the view **mysite/urls.py**
		1. need to use `include` to have the top-level point to the view 
			1. You should always use `include()` when you include other URL patterns. `admin.site.urls` is the only exception to this.
4. Start the server `python manage.py runserver`

# How to Create Model and Run Data Migration
1. add model to models.py - polls/models.py 
2. add the new app to list of app in mysite/settings.py 
```
INSTALLED_APPS = [
	"polls.apps.PollsConfig",
	'django.contrib.admin',
	'django.contrib.auth',
	'django.contrib.contenttypes',
	'django.contrib.sessions',
	'django.contrib.messages',
	'django.contrib.staticfiles',
]
```

3. Run the migration command to add the table to DB 
` python manage.py makemigrations polls`
- this indicates to Django that changes have been made to the models 
- Run after making changes to models 
- check what the SQL output would be: `python manage.py sqlmigrate polls 0001`
- **Run the migration officially:** `python manage.py migrate`

**Summary Steps** 
- Change your models (in `models.py`).
- Run [`python manage.py makemigrations`](https://docs.djangoproject.com/en/5.0/ref/django-admin/#django-admin-makemigrations) to create migrations for those changes
- Run [`python manage.py migrate`](https://docs.djangoproject.com/en/5.0/ref/django-admin/#django-admin-migrate) to apply those changes to the database.

# How to Add to DB 

- check how many instances there are of a class:
	- `Question.objects.all()`
- Create a new instance: 
	- `q = Question(question_text="What's new?", pub_date=timezone.now())`
- Save to DB: `q.save()`
- View property of instance: ` q.question_text`
- Change the value of the property of the instance: 
	- `q.question_text = "Hello"`

Querying DB 
- Get by Primary key: ` q = Question.objects.get(pk=1)`
- Call method on instance: `q.was_published_recently()`

 **Set** `_set`
-  Give the Question a couple of Choices. 
- The create call constructs a new Choice object, does the INSERT statement, adds the choice to the set of available choices and returns the new Choice object. 
- Django creates a set (defined as "choice_set") to hold the "other side" of a ForeignKey relation (e.g. a question's choice) which can be accessed via the API.

Relationship 
- 1 to Many: `q = Question.objects.get(pk=1)`
- Add items to the Many side - Choices 
	- `q.choice_set.create(choice_text="Not much", votes=0)`
- View all items on the Many side 
	- `q.choice_set.all()`
- Count how many: `q.choice_set.count()`
- Filter on the many side: `Choice.objects.filter(question__pub_date__year=current_year)`

**Delete**
- `c = q.choice_set.filter(choice_text__startswith="Just hacking")`
- `c.delete()`

# Adding App to Admin Index 
1. go to admin.py within the app ( polls app)
2. Import model 
3. Register the model to the admin site 
```python
from django.contrib import admin
from .models import Question

# Register your models here.
# tell the admin that Question objects have an admin interface.
admin.site.register(Question)
```


# Generic Views 
mysite/polls/views

## Context 
- specifies what data is passed to the template using the `render()` function 
```python
from django.shortcuts import render 
from .models import MyModel 

def my_view(request): 
	items = MyModel.objects.all() 
	context = { 'items': items, } 
	return render(request, 'my_template.html', context)
```

context used in template: 
```html
<!-- my_template.html -->
<ul> 
	{% for item in items %} 
		<li>{{ item.name }}</li> 
	{% endfor %} 
</ul>
```

## Reverse 
-  `reverse()` returns "/polls/3/results/"
- forward direction is **url --> view**
- ` reverse()` is: give Django the name of a view, and Django generates the appropriate url. **view name --> url**

# Tests 
- Run tests: `python manage.py test polls`
- everything that was imported to write the function, also import it for the Tests 
- Rules: 
	-  separate `TestClass` for each model or view
	- a separate test method for each set of conditions you want to test
	- have test method names that describe their function


# How to Query / Create Instances of a Model Django

1. To Query: `Cohort.objects.get(id=456)`
2. To Create, if there are kwargs, need to specify each field and value 

```python
new_student = Student() #Creates an instance of the Student Model
new_student.enroll(
	cohort=Cohort.objects.get(id=456),
	first_name="first_name",
	last_name="lastnam",
	email="student@email.com",
	phone=123456789,
	payment_method="upfront",
	enrollment_form=**None**,
	notes="Notes",
	)
```

# Testing 
```
python manage.py test --keepdb --settings=sis.settings.testing \
  assessments.tests.test_views \

python manage.py test --keepdb --settings=sis.settings.testing \
  talks.tests.test_models \

python manage.py test --keepdb --settings=sis.settings.testing talks

```

1. import factories into ipython 
`from assessments.factories import *`
2. in factory boy, can create instances in batch 
ipython 
```python
FakeSubGraded.create_batch(10) #enter number of instances to create
```


- create fake grades 
- calculate them 
- see if the values display 
- check if only staff can see 
- check student can't see 
