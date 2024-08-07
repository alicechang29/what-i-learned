Java is a compiled, strongly typed language 
- Compiled = write code and build it 
- Strongly-typed = the parameter will have a type. Types are inherited 
- Java: There are 2 types of classes in Java 
	- class extends another class 
		- Each class can only have a single parent 
		- Has fields 
	- class has methods 
		- class implements an interface 
		- Has methods, no fields 
- Java has a compiler, takes jar file and runs it 

Python is an interpreted, strongly-typed language 
- Interpreted = write code and run it 

Running Java code is a 2 step process: 

1. Write the code > save it in .java file 
	- Note: the file name MUST be the same as the public class defined in the file
*Hello.java*
```java
public class Hello {

    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```

2. Compile 
```shell
$ javac Hello.java
2$ ls -l Hello.*
3-rw-r--r--   1 bmiller  bmiller  391 Jul 19 17:47 Hello.class
4-rw-r--r--   1 bmiller  bmiller  117 Jul 19 17:46 Hello.java
```

`javac Hello.java`
- compiles java source code into compiled byte code and saves it in file: `Hello.class`


