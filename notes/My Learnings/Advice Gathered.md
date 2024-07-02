- Try to be aware of which things are general concepts, which apply globally, no matter what language or framework you are using.   Learning specifically about react (or other specific things like flask, etc) is for sure useful, but is obviously limiting, and the worst is not realizing what ideas or techniques are specific and what are general (e.g. the difference between "this is the right way to do this in react" vs "this is a general good practice or design concept") 

## OO 

- Object oriented design and development, including different kinds of inheritance, is a very useful concept.   Lots of modern frameworks kind of de-emphasize this, but there are very useful concepts there.  I don't know if you learned any java, but I used to ask an interview question about **when it is better to create a base class that subclasses extend, and when it is better to have an interface that classes implement**, and the code I refactored last week was a textbook perfect example of when it is better to have a class which is extended, only the person who did it used an interface.  And because of his wrong choice, I would have had to make a change in like 4 places just to add a new field.   But after I refactored it, it only required changes in a single class (and so future changes like this will also only require changes in that one spot).


## Naming Variables 

- Naming variables, or functions or classes, is all about communicating what it is.   Ideally, other developers should be able to understand what everything is or what it does, without the need for any comments or documentation.  
- So you want to imagine if you had no idea what this was, and first saw the name, what would you think it was?   
- And if the name would make it seem to be something else, that's a problem.     

1. Make sure the tense or grammar of the name aligns to what it does.  In this case,  filteredData implies it is data which has been filtered, but it hasn't yet, so now you have a name which is misleading.   Even just calling it X would have been better than that :)
2. Making it easy to get 2 variables confused.  For example, variables named filterData1 and filterData2 are easy to get mixed up, but preFilterData and filteredData aren't.


## Function Sizes 

- The same ideas also apply to how to break things up into functions.  Your goal is that when someone sees the functions being called in some other code, they do what someone thinks they would do - not more, not less.  But the most important thing is that code is broken into functions which are reusable, and are easy to maintain.  Reuse and maintainability are the entire reason functions exist at all.    Mason and Marc and I (and others) always say that if you find yourself copying and pasting, you probably did something wrong, and that code should be in a function you can call in both places.  I also always say that a good developer is supposed to be lazy - don't write new code, call code you already wrote.   I think you approach it that way, you wind up with functions which are an appropriate size.


# To Learn 
- when it is better to create a base class that subclasses extend, and when it is better to have an interface that classes implement


Lightning talk ideas: 
- performance optimization 
	- too slow or using too much memory 





EC2 is the amazon service that provides virtual machines (which they call instances).   And again that whole concept is probably not worth your time right now.   But just to give you an idea, the terraform module that we used to create a new environment at MM did approximately these steps (though not exactly in this order because of how the dependencies work):

1. Create an S3 bucket, to hold attachments and files for calcs and stuff
2. Create an IAM role which has access to the bucket and other AWS things the environment will need.   The same ways you can give an IAM user access to things you can also do with a role, and users who are allowed to can "assume the role", and also other things that run inside AWS can assume the role.
3. Create the ec2 instance(s) where the services actually run, as well as the apache HTTPD server which hosts the UI files and sits in front of the services, and make it so that anything that runs on that instance is running with that role (within EC2 that is called an instance role)
4. Configure the DNS entries (in the AWS "route53" service) and load balancer so that the domain names <whatever>.go to the right places