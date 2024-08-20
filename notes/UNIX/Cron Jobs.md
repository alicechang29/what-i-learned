Cron Jobs are a way to schedule a script to run at a specified time. 

## Options to Run Cron Job

### Make HTTP Endpoint 
1. Create an HTTP endpoint and view that calls the script 
2. Use the cron job to visit the URL, which will trigger the script to run 

### Have Cron Job Run the Script 
1. Get the absolute file path for the script:
	1. Navigate to 1 directory outside of the script 
	2. In shell, `pwd` to get the root file path 
2. Get the file path of the script 
3. Setup cron job: 
	1. In shell: `crontab -e`
	2. Save cron job 
```
30 * * * * cd /Users/alicechang/rithm/sis-r38 && ./venv/bin/python project/manage.py runscript slack_bot
```

