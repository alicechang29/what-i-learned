https://fsl.fmrib.ox.ac.uk/fslcourse/unix_intro/files.html
# Path 

#### Absolute File Path 
- Path to the file if starting from the Root 
#### Relative File Path 
- Path to the file if starting from the current location 

### Path Location 
- if `/` is at the start of the file, means starting from the Root 
- otherwise, `/` is a directory separator in paths 
- `.` refers to current location 
- `..` refers to parent directory 

![[Pasted image 20240730094903.png]]

- Absolute file path of jon: /users/admin/jon
- Relative file path from student to jon: ../admin/jon 

- Where you are in the Path: `pwd`

## File & Directory Permissions 

Permissions are: 
- read `r`
- write `w`
- execute `e`


## Cat Command 
- concatenates files and sends to the screen (shell window)
- `cat ~/ <filepath>`
	-  The tilde character (~) is Unix shorthand for your home directory.

```shell
~ % cat ~/Documents/repos/what-i-learned/notes/Java/Java\ Overview.md 

Java is a compiled, strongly typed language 

- Compiled = write code and build it 

- Strongly-typed = the parameter will have a type. Types are inherited 

- Java: There are 2 types of classes in Java
```


## Copying Files 
`cp ~/.profile ~/pcopy` 

makes a copy of your .profile file, and stores it in a file called "pcopy" in your home directory.

## Moving Files 
`mv <file path of i want to move> <path of where i want to move to>`


Goal: 
- figure out how to move docker into my main file PATH 
- how to move things into my main file PATH 
- basics of Vi (for editing files)

PATH = list of directories where it expects to find commands 


### Open Command 
`open -a MyProg.app`
