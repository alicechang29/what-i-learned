### Configuration Files 
- Yaml are configuration files for the app 

Read intellij tutorial 
- file > configurations > springboot 
- pick profile - local 
- override config properties -- put in the spring.datasource.password, where you enter password for local postgres user 

### Logging within IntelliJ 
logging.level.org
To change the logging level, go into application.yaml (which is where the configuration files are)
logging.level.org.dabima 

In the code where I see .fine (that is the level - sometimes it's .Info, etc )
- the highest priority level = Error 
- Warn 
- Info 
- Debug 
- Fine (is the most chatty level)
	- If looking at the levels in the configuration, Fine is not a thing, it's Trace 

Add spring as a project to my intellij configuration 
So that I can run my code 


**Do this every time** 
**How to turn on do rebase on git pull in my local config** 
- if i had changes that i had locally but didn't commit, if i tried to do `git pull --rebase` would complain 

### Terminate Service 
- always want to terminate service within intellij 

**To check what is using a port:** `sudo lsof -i :8080`

**To kill what is using a port, reference it by port id ( pid ):** `sudo kill 17152`
(17152 in this case is the pid)
