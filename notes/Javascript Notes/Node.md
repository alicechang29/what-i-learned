# How to start up Node console 
- remember to export what I want out from the file 

**In REPL**
```javascript
const fs = await import('fs/promises');
// or
const { readFile } =
  await import("fs/promises");
```

**In file**
```javascript
import * as fs from "fs/promises";
// or
import { readFile } from "fs/promises";
```

Reading File: `fs.readFile(path, encoding)`

```javascript

import { readFile } from "fs/promises";
// fs.promises module is built and provides interface to file system

async function cat(path) {
  try {
    let contents = await readFile(path, "utf8");
    console.log("file contents", contents);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

}

// can use err.message to see only the single line of err

// command line: node step1.js one.txt
// process is global object provided by node.js
// argv - array that holds command line arguments
// argv[0] - node
// argv[1] - step1.js
// argv[2] - one.txt
// we want to run cat on the PATH that is provided in command line
await cat(process.argv[2]);
```

Writing Files: `fs.writeFile(path, data, encoding)`
data = data to output

```javascript
import { writeFile } from "fs/promises";

const content = "THIS WILL GO IN THE FILE!";

async function writeOutput() {
  try {
    await writeFile("output.txt", content, "utf8");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Successfully wrote to file!");
}
```
