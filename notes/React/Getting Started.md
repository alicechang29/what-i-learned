
**Create skeleton React App:** 
`degit rithmschool/start/js/react MYAPPNAME`
note: to look at what's inside, use `%tree`

**Start app** 
`npm install`
`npm run start`

**Build app** 
`npm run build`


**To start up server:** 
`vite --open`

**In index.html:** 

- Load Babel standalone library:
    
    `<script src="https://unpkg.com/babel-standalone"></script>`
    
- Give JSX files a `.jsx` extension and mark with `type="text/jsx"`:
    
    `<script src="index.jsx" type="text/jsx"></script>`