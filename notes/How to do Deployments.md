
# Render 
- for BE deployments 
- make sure to wake it up 5 min before using 

# Surge 
- for FE deployments 
- setup custom domain name (CNAME) with `*.demo.alice-chang.com`
- https://surge.sh/help/adding-a-custom-domain

# Netlify 
If deploying React app (Netlify)![[Screenshot 2024-06-21 at 2.41.22 PM.png]]
- build command (npm run build)
- publich directory (dist)
	- this is where npm lives 
- Add environmental variables 


### Router + Surge 

Make a copy of your `dist/index.html` file to `dist/200.html`

Now, for URLs that don’t map to in-directory resources, this will be used
Can have netlify auto-deploy from main so make sure to use branches 
`cp index.html 200.html`

### Router + Netlify

Make a file at root of repo called `_redirects`

`/*    /index.html   200`

(for all pages that can’t be found, use `index.html` and consider this `200 OK`

inside dist directory 
create `_redirects`

![[Screenshot 2024-06-21 at 2.57.52 PM.png]]


Then: change the “Build and Deploy Settings”:
- **Build Command**: `npm run build && cp _redirects dist`


# Own Server

- server: a program / computer that serves things to you 

`ssh` = secure shell 

after setting up own cloud server, play with it 
- install psql 
- install flask 
- get comfy in the shell


Portfolio project is a 4 hour project 
blog / write a medium article on what i've learned
keep a bug journal 

# Github - CLEAN IT UP 
make code in pinned repo look pretty 
- create a test user account 
- put username/password in the readme 
- put in learnings in the readme 
- put in what i still want to work on in the readme 
- give exact command to run the test 
- include screenshots 
- see joel's chat noir 


