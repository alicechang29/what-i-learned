Normally, if using TS with node, you need to transpile TS in JS. With Bun.sh, don't need to do this anymore. 

### Initial Setup 
Run: `bun init`

## Server 
Within index.ts 
```ts
const server = Bun.serve({
	port: 3000,
	fetch(req) {
	return new Response("Bun!");
	},

});

console.log(`Listening on http://localhost:${server.port} ...`);
```
Start server: `bun index.ts`

### Scripts 
Can add scripts inside package.json 
```json
"scripts": {
	"start": "bun run index.ts"
},
```
Now instead of using `bun index.ts` to start server, can do: `bun run start`

### Install Packages 

```shell
//installs package 
bun add <package name> 

//make the type errors go away for TS 
bun add -d @types/<package name>
```

