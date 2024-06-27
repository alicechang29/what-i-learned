
## Factories 

### Test Setups - `setUpTestData`
- setting up test data runs ONCE 
- ALL tests that relate to a single test setup will have the same "factory" instances 

*see SIS-38 -> assessments/test_views*
```python
class AssessmentSessionDetailViewTestCase(TestCase):
	"""Test assessmentsession detail view."""
	@classmethod
	def setUpTestData(cls):
		cls.asms = AssessmentSessionFactory()
		cls.sub = SubmissionFactory()
		cls.asms_other = AssessmentSessionFactory(
			id=102,
			assessment__id="other-cohort",
			cohort__id="r100",
		)
		cls.staff = StaffMemberFactory()
		cls.student = StudentFactory()
```

- Now, if I want to **create "my own" factory instances** (eg: another assessment, submission, etc...), I need to instantiate them myself by: 
1. Find the PARENT factories 
	- In the case of "Submission" instance, the levels are: 
		- Assessment 
		- Assessment Session 
		- Enrollment 
		- Submission 
	- For EACH "level", I need to instantiate that instance
		- NOTE: if there are any unique constraints (student and cohort), I will need to create Student and Cohort instances as well 
		- For Enrollment, it is: 
			- Student 
			- Cohort 
2. Create the Submission instance and pass in **CUSTOM** values: 
```python 

sub1 = SubmissionFactory(
	id=17,
	assessmentsession__id=test_asms.id,
	grade=87,
	enrollment__id=389,
	enrollment__student__username="a389"
)
```


# Converting List to Query Sets 

Certain Django methods can only be performed on QUERY SETS. 

When testing, instances may be created that will be inside a LIST, which would cause Django methods to fail. 

Example: Testing if aggregating the Average on a set of grades works 

- Original code 
```python 
from django.db.models import Avg

context['rollup'] = (
	Submission
	.objects
	.filter(assessmentsession__cohort=self.cohort)
	.filter(assessmentsession__assessment_id=self.kwargs['slug'])
	.aggregate(avg=Avg("grade"))
)
```

- Test 
```python
# created 3 separate Submission instances 
all_subs = [sub1, sub2, sub3]
# doing Avg(all_subs) won't work 

# Need to convert this list into a query set 
all_sub_ids = [i.id for i in all_subs]
qs = Submission.objects.filter(pk__in=all_sub_ids)

avg_grade = qs.aggregate(avg=Avg("grade"))

# now can compare if the calculations are as expected 
response = self.client.get(f"/assessments/{test_asms.assessment.id}/")
assert response.context['rollup'] == avg_grade

```
https://stackoverflow.com/questions/1058135/django-convert-a-list-back-to-a-queryset

