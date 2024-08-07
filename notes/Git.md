## To checkout a branch

1. git pull 
2. git checkout 

## Git Commands

| Git commands                    | Definition                                                                                                             |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `git checkout -b <branch name>` | create new branch and checks it out                                                                                    |
| `git checkout <branch name>`    | checkout the branch locally                                                                                            |
| `git add <file name>`           | adds the file listed                                                                                                   |
| `git add .`                     | adds all files                                                                                                         |
| `git clone`                     | makes copy of remote repo                                                                                              |
| `git push upstream`             | pushes local changes out                                                                                               |
| `git pull`                      | update local copy -- Note: if no `git pull`, `git status` will show no changes -- it is doing fetch and merge together |
|                                 |                                                                                                                        |

**Origin:** designed for a world not connected to the internet 

**Terms:** 
- Upstream - a branch that current branch is tracking 
- Remote origin  
- Branch - when working a big project and don't want to break things for other people 
- Fetch - updates local copy of remove versions of its branches 
- Fast-forward - moves pointer of where you are to the current spot 
- Merge - merge from remote branch into local 
- Rebase - moves current branch around, tells history to be clean 

From Git perspective, dev from local repo and origin in local repo are 2 different branches. 


Note: "Pull Requests" are a Github specific thing 