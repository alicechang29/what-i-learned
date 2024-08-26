
### How to Create a Bash Script

1. Put all commands inside a `.sh` file 
2. Make the script executable: `chmod -x <script name>`

```shell
touch scriptName.sh
nano scriptName.sh 
```

3. Inside Nano - command line text editor in Linux 
```
#!/bin/bash

# Change to the "dsvc" directory
cd dsvc/dsvc/ || { echo "Failed to cd into 'dsvc'. Directory does not exist."; exit 1; }

#insert any copy, env variables, run migrations, etc. 
# for env variable: export ${envVar}=__

```
Save edits: `ctrl+o`  --> `enter`
Exit editor: `ctrl+x`

4. Make script executable 
```
chmod +x scriptName.sh
```

5. To run script: 
```
./scriptName.sh
```

I use this to startup my environments instead of having to type each command myself each time :) 