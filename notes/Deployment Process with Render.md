### Part 1 - establish database on webserver 
- 
- Use DBCentral - Rithm hosted server
	- Host for Postgresql 
1. on venv >  Seed new database 
```shell

pg_dump -O warbler | psql postgresql://alice_chang_warbler:fa55be6e@204.236.139.30:5432/alice_chang_warbler




psql postgresql://alice_chang_warbler:fa55be6e@204.236.139.30:5432/alice_chang_warbler


\dt #see all the tables 


```

### Part 2 - Render 
- Use Render to take flask app and serve it from the cloud (similar to Heroku but free)

1. On venv > Install gunicorn - middleman to interact with web app 

```shell
pip install gunicorn 
pip freeze > requirements.txt

```
2. Commit to github bc Render interfaces with github account 
3. Create account on Render USING github 
4. Render > Dashboard > New > Web Service > Build and deploy from Git repo > Connect repo  
5. Fill out form: 
	1. Name 
	2. make sure build command is: 
		1. `pip install -r requirements.txt`
	3. Start command 
		1. `gunicorn app:app --threads 2`
	4. Choose advanced, and enter environmental variables:
		1. DATABASE_URL: URL from Rithm
		2. SECRET_KEY: anything you want _(to be secure: long and random)_
		3. PYTHON_VERSION: `3.11.9`
6. Choose “Create Web Service”

### Debugging 
1. Dashboard > log 


### Can turn off auto-deploy 
Dashboard > Settings > Auto-Deploy 