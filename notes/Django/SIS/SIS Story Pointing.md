
### Add Announcement App #12
8

Model
- Create new model 
- Cohort (model - foreign key)
- Model testing 

UI 
- Add new page to admin page (new field pulls from model)
- View testing 

### Add tags to curric items #11
13 

2 new models 
- Model foreign keys for each item 

UI 
- multivalue-picklist 

polymorphism in DB 


### Create app for upcoming tech conferences #10
8 

Model 
- create new model 
- watson search 
Auth
- anyone with an account 
UI 


### Create a job board #9
8
- Model 
- Auth 
	- only for ended cohorts 


### Create lightning talk library #8
8 
- Model 
- Uploading files / slides 
- Workflow for public/private 
- UI 

### Profile page should indicate public/private state of info #7
3 
- UI 
	- testing??? 

### Applications dashboard: Add cohort-start date, cohort-enrollment-cutoff date, cohort-dri #6
3 
- UI 
- Models 
	- add in foreign keys 
	- What is models.RESTRICT in django? 



TO RESEARCH 
- Migration system 
- Middleware 
- Watson search 







-----
### Add "Has extension?" to admin filter for submissions #20

#Minor
on models/Submission: 
- similar to status, create a sub_has_extension that contains picklist values 
on assessments/models: 
- add additional value to "list filter" for has_extension 
add tests 
- add new value to SubmissionFactory 


### Display pass/fail on assessment sessions admin list #19
#medium
assessments / admin.py

Similar to PubWorkflowAdminMixin - set the status to be an emoji type 

- create a mixin 
- the field exits!! "is_pass_fail"

### Make DRI for item visible in curriculum listings #5
#Minor
- If user is DRI, update the style 
- Update the template that generates the staff pictures 

### Add login photo/message to login page #4
#Hard 
- specific photo / welcome message 
	- Add values to DB 
	- How is photo stored?? S3 bucket? 
- Need a form for creating the welcome message 
	- takes in cohort
	- photo 
	- values 
- need message, photo - TEST 
- display - TEST 
- Scheduling the welcome - TEST 

### Display min/max grade on assessment session page #3
#minor
- updating the template to include new scores 
- generate the min and max score (query)
- add tests 

### Bootcamp application: "how long have you been learning JS?" #2
#minor
- add additional field to admin 
- add field to DB
- add test 

### Add "your cohorts" feature so students can switch between cohorts they're in #1
#Extra-hard ~ 5 points 
- query for students with multiple enrollments 
- Update template to include a link to each page 
- Update URL patterns for the student 
- Create a new cohort template page 



