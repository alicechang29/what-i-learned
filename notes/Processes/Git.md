## To checkout a branch

1. `git pull` 
2. `git checkout <branch>`

### Merge Dev into my branch 

1. commit all my changes to my current branch 
2. git checkout dev 
3. git pull 
4. git checkout my branch 
5. git merge dev 
6. resolve my own conflicts - `ctrl-s, ctrl-q`
7. git commit to my current branch 
8. git push 

### Handling Merge Conflicts 
Merge is  a 2 step process under the hood but is confusing because it is 1 command
`Git merge <branch>`

Git is really doing 2 steps: 
1. Auto-merging all the files 
2. Committing the changes as a new commit 

**If a merge conflict happens, Git forces you to fix the issue.** 
1. Fix the merge conflict 
2. Add the file `git add <file>`
3. `Git commit`
4. Proceed like normal 

If reviewing a PR and there is a merge conflict, message the person to resolve it 

### Rebase 
`git pull --rebase`

### Reset back to a specific commit 
`git reset --hard <HASH-CODE>`



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

1. git pull (from development)
2. git checkout -b (new branch name)
3. git add (file name)
4. git commit -m (my message)
5. git push (branch name i just created)

i originally tried git push upstream but it didn't work 
```
fatal: 'upstream' does not appear to be a git repository
fatal: Could not read from remote repository.
```