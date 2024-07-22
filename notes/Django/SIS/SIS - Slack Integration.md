### Overview

Created slackbot that sends notifications to DRI of lecture session for any sessions that start within next 12 hours and are either in private state and/or missing assets and/or only have assets that are in private state by:

- Added a method on Lecture Sessions model "get_lectures_that_need_alert"
- Added slack_bot scripts within new slackbot app

### Implementation Details:

Note: currently this works on a slack account we made for development and runs on cron jobs setup on our own computers.  
Need to follow steps to do it on other slack accounts/computers.

**To create slackbot:**

- Login as admin for Slack
- Create new slackbot app: [https://api.slack.com/apps](https://api.slack.com/apps)
- Within slackbot app settings, navigate to OAuth & Permissions
- Set Bot Token Scopes to have: chat:write, users:read.email
- Retrieve OAuth Token
- Navigate back to "Basic Information" > "Install Your App"

**Add slackbot token to SIS**

- Within .env file, create key: SLACK_OAUTH_TOKEN

**Setup cron job:**

- Get absolute file path for the project
- Setup cron job (crontab -e)  
    `0 * * * * cd <insert absolute file path> && ./venv/bin/python project/manage.py runscript slack_bot`