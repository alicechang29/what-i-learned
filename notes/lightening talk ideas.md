- no sql 
- validating forms submitted from client using Flask 
- - How the internet works, or basic concepts of networking
- Full text searching (either about elastic search, or about the concept in general)
- ETL (if you don't know what that stands for, look it up and you will remember)
- What LLMs like copilot are good for and bad for, when it comes to using them to help you code


EXPLAIN WHAT -- FRIDAY JUNE 28 
`django_get_or_create = ('id',)`
- Django will auto-create default factory if the id already exists 

```

sub1 = SubmissionFactory(

id=17,

assessmentsession__id=20241,

assessmentsession__assessment__id=2024,

grade=34)

# double underscore is how you walk from assessment session to the id on it (Django thing)
```


- why to store data as json if it's from an api? 
- geospatial psql 
- ideas: go back to warbler and create a DB view to query things more easily 
	- create a view for people who have more than 3 posts that joined in the past year 
- build warbler with mongoDB - where consistency isn't as important as speed 
