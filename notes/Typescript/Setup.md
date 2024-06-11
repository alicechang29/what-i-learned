
### Add compiler to file
tsconfig.json
```
{
  "compilerOptions": {
    "target": "ES2020",  // transpile to modern JavaScript
    "strict": true,      // strict checking for type errors
  }
}
```

### Compile into JS 
1. `tsc`
2. `tsc --watch`


### Basic

Basic setup with a sample test:

```shell
$ degit rithmschool/start/ts/basic my-proj
$ cd my-proj
$ npm i

$ vitest     # run tests
```

In a separate shell window: `tsc --watch`

### Vanilla Front-End

Setup with a dev server and a sample test:

```shell
$ degit rithmschool/start/ts/fe my-proj
$ cd my-proj
$ npm i

$ vitest      # run tests
$ vite        # compile tsc & start dev server
```


### General Node

Setup with basic Node and a sample test:

```shell
$ degit rithmschool/start/ts/node my-proj
$ cd my-proj
$ npm i

$ npm run test      # run tests
$ npm run start     # run main.js

```

In a separate shell window: `tsc --watch`

### Node Express

Setup with basic Express app and a sample test:

```shell

$ degit rithmschool/start/ts/express my-proj
$ cd my-proj
$ npm i

$ npm run test      # run tests
$ npm run start     # run server
```

In a separate shell window: `tsc --watch`

### React

Setup with basic React app and a sample test:

```shell
$ degit rithmschool/start/ts/react my-proj
$ cd my-proj
$ npm i

$ npm run test      # run tests
$ npm run start     # run server
```

In a separate shell window: `tsc --watch`



### Definition files

- When adding libraries via npm, check if they have a “definitions” file with type definitions for their functions, objects and classes.
    
    - Libraries written in TypeScript won’t need this
        
    - Popular non-TS ones will have something named @types/libname
    
        - eg, to get helpful types for lodash: `npm install --save-dev @types/lodash`

