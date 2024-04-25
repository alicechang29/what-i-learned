Use virtual environments for installing and testing python libraries 
Don't want to randomly install libraries on computer bc it's messy 

### Creating a Virtual Environment[»](https://rithm-students-assets.s3.amazonaws.com/r38/lectures/python-tools/handout/index.html?AWSAccessKeyId=AKIA6I7NF475LYNA7YJL&Signature=92ndaMWfxOSWpiiwdNvGRNf%2B5o8%3D&Expires=1713934985#creating-a-virtual-environment "Link to this heading")

$ cd my-project-directory
$ python3 -m venv venv

(“using venv module, make a folder, venv, with all the needed stuff”)

That makes the virtual environment folder — but you’re not _using it_ yet!

### Using Your Virtual Environment[»](https://rithm-students-assets.s3.amazonaws.com/r38/lectures/python-tools/handout/index.html?AWSAccessKeyId=AKIA6I7NF475LYNA7YJL&Signature=92ndaMWfxOSWpiiwdNvGRNf%2B5o8%3D&Expires=1713934985#using-your-virtual-environment "Link to this heading")

$ source venv/bin/activate
(venv) $  # <-- notice shell prompt!

- You only need to **create** the virtual environment once
    
- You need to use source every time you open a new terminal window
    

What does it mean to be “using” a virtual environment?

- It makes certain python is the version of Python used to create the venv
    
- You have access to the standard library of Python
    
- You **don’t** have access to globally installed pip stuff
    
- You get to explicitly install what you want — and it will be only for here!
    

### Installing into Virtual Environment[»](https://rithm-students-assets.s3.amazonaws.com/r38/lectures/python-tools/handout/index.html?AWSAccessKeyId=AKIA6I7NF475LYNA7YJL&Signature=92ndaMWfxOSWpiiwdNvGRNf%2B5o8%3D&Expires=1713934985#installing-into-virtual-environment "Link to this heading")

- Make sure you’re using your venv — do you see it in your prompt?
    
- Use pip install, as usual
    
    - But now it’s downloaded & installed into that venv folder
        
    - It won’t be available/confuse global Python or other venvs — tidy!
        

### Tracking Required Libraries[»](https://rithm-students-assets.s3.amazonaws.com/r38/lectures/python-tools/handout/index.html?AWSAccessKeyId=AKIA6I7NF475LYNA7YJL&Signature=92ndaMWfxOSWpiiwdNvGRNf%2B5o8%3D&Expires=1713934985#tracking-required-libraries "Link to this heading")

To see a list of installed libraries in a venv:

$ pip3 freeze
# ... list of installed things...

It’s helpful to save this info in a file (typically named “requirements.txt”):

$ pip3 freeze > requirements.txt

### Using Virtual Environments[»](https://rithm-students-assets.s3.amazonaws.com/r38/lectures/python-tools/handout/index.html?AWSAccessKeyId=AKIA6I7NF475LYNA7YJL&Signature=92ndaMWfxOSWpiiwdNvGRNf%2B5o8%3D&Expires=1713934985#using-virtual-environments "Link to this heading")

- Virtual environments are large & full of stuff you didn’t write yourself
    
- You **don’t want this to get into git / Github**
    
- So, add `venv/` to your project’s .gitignore
    
    - Use git status to make sure it’s being ignored
        

Sometimes you will have to tell VS Code that you are working in a venv

![_images/find-venv1.png](https://rithm-students-assets.s3.amazonaws.com/r38/lectures/python-tools/handout/_images/find-venv1.png) ![_images/find-venv2.png](https://rithm-students-assets.s3.amazonaws.com/r38/lectures/python-tools/handout/_images/find-venv2.png)

- This will prevent warning messages about not being able to resolve imports
    

### Recreating a Virtual Environment[»](https://rithm-students-assets.s3.amazonaws.com/r38/lectures/python-tools/handout/index.html?AWSAccessKeyId=AKIA6I7NF475LYNA7YJL&Signature=92ndaMWfxOSWpiiwdNvGRNf%2B5o8%3D&Expires=1713934985#recreating-a-virtual-environment "Link to this heading")

When using a new Python project:

$ git clone http://path-to-project
$ cd that-project
$ python3 -m venv venv

Then, as usual when working with a venv:

$ source venv/bin/activate
(venv) $ pip3 install -r requirements.txt
# ... pip output here ...

### Leaving Virtual Environments[»](https://rithm-students-assets.s3.amazonaws.com/r38/lectures/python-tools/handout/index.html?AWSAccessKeyId=AKIA6I7NF475LYNA7YJL&Signature=92ndaMWfxOSWpiiwdNvGRNf%2B5o8%3D&Expires=1713934985#leaving-virtual-environments "Link to this heading")

Use the deactivate shell command to leave the virtual environment:

$ source venv/bin/activate
(venv) $ deactivate
$ # ... back to regular terminal ...