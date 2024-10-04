DO NOT ALTER CODE IN MIDDLE OF DEBUGGING 

**Determining if bug is with code or API**


**Process for Debugging** 
1. Start debugging 
2. Figure out issue 
3. End debugging Session 
4. Change code 
5. Save


**Flask Debugging** 
1. Run flask server 
2. Get the PIN code for debugger tool 
3. If error pops up, click on the error (bottom of page)
4. Enter in the PIN code 
5. Opens python interpreter at point of failure 

**Python Debugger** 
- built into the language 
- add a break point right into the code  

```python

breakpoint()
```


```shell

# everything surrounding line of code 
(Pdb) l 

# see objects and variables 
(Pdb) p post_id 

(Pdb) p POSTS

# stepover 
(Pdb) n

#find all the commands for debugging 

(Pdb) ?

#when done with debugging and want to continue
(Pdb) c

```

| Key | Command                            |
| --- | ---------------------------------- |
| ?   | Get help                           |
| l   | List code where I am               |
| p   | Print this expression              |
| pp  | Pretty print this expression       |
| n   | Go to next line (step over)        |
| s   | Step into function call            |
| c   | Continue to next breakpoint or end |
| w   | Print “frame” (where am I?)        |



