
# Fields 

| Field                  | Data Type | Key?                    | Defaults?                  | Validators         | Verbose Name         | Notes                                                              |
| ---------------------- | --------- | ----------------------- | -------------------------- | ------------------ | -------------------- | ------------------------------------------------------------------ |
| title                  | string    |                         |                            |                    |                      |                                                                    |
| description            | text      |                         |                            |                    |                      |                                                                    |
| cohort                 | reference | FK:   courses.Cohort    | on_delete= models.RESTRICT |                    |                      | **Can make this optional** - treat this as the cohort was given to |
| enrollment             | reference | FK: students.Enrollment | on_delete= models.RESTRICT |                    | "Posted by"          | **CHANGE THIS TO USER (staff or student)**                         |
| url                    | URL       |                         |                            |                    | "Lightning Talk URL" |                                                                    |
| zipfile                | File      |                         |                            | zip file extension |                      |                                                                    |
| date given             | Date      |                         |                            |                    |                      |                                                                    |
| Timestamp mixin        |           |                         |                            |                    |                      |                                                                    |
| Staff only notes mixin |           |                         |                            |                    |                      |                                                                    |

# Methods 

**Lightning Talk File Path** 
```python
def submissionfile_path(instance, filename):
	cohort_id = instance.submission.assessmentsession.cohort_id
	return f'submissions/{cohort_id}/{instance.id}-{filename}'
```
**Submit**
- Inputs: 
	- self 
	- zipfile 
	- URL
	- send_email 
- Outputs: T/F 
- Conditions: 
	- Needs to checks if either URL or Zipfile is included 
- Actions: 
	- Creates a zip file --- research what this is doing 
		`if zipfile:self.submissionfile_set.create(zipfile=zipfile)`
	- sends email upon successful submission 

**URL to the VIEW**
- research what's happening 
```
def get_absolute_url(self):
return reverse(
	"assessmentsession_detail", kwargs={"slug": self.assessment_id}
)
```


## References 

```python
enrollment = models.ForeignKey(
	"students.Enrollment",
	on_delete=models.RESTRICT,
)

cohort = models.ForeignKey(
	"courses.Cohort",
	on_delete=models.RESTRICT,
)

github_url = models.URLField(
	blank=True,
	verbose_name="Github URL",
)

zipfile = models.FileField(
	upload_to=submissionfile_path,
	validators=[
		validators.FileExtensionValidator(allowed_extensions=['zip'])
	],
)
```


TODO: 
- sis/url's is the top level urls that should point to TALKS 
	- don't need serializers/view sets!! 
- Don't need slugs for the url's - just use the int id 
	- have the url patterns start with a dash "-add"
	- see assessments/url's.py 
	- `int:pk`


Search possiblities 
- search icon -- need to tweak to search not restricted by cohort 
- Add a Talks app to menu 
	- where search can live here and pull list of all talks 
- Talk list can extend base_html 
- Talk detail extends base_html 

Breadcrumbs - tell you where you are (grey bar at the top)
- Nice to have: 
- Rithm 38 / Talks / Talk 


**What We Did** 
- Created Lightening model 
- Ran data migrations to add the new model to the DB 
- Wrote model tests: 
	- selfAssertRaises takes a callback 
```python
def test_submit_with_bad_file(self):
"""Test submitting process fails with non-valid file ext."""
	self.assertEqual(len(Talk.objects.all()), 1)
	fake_talk = TalkFactory(id=10002, file="bad_file.ext")
	self.assertRaises(ValidationError, fake_talk.full_clean)
```

TODO: 
- best way to handle "presenter" in factories.py 
- 