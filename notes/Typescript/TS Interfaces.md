Interface in TS
- It can define properties, methods, and for functions - arguments and return value 
- It's a contract between whoever implements it and whoever uses it 
- https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html#interfaces
### Defining Interface

```ts
export interface IExpressError extends Error {
	status: ErrorStatus;
}

//the IExpressError has all the fields from Error interface 
// and is adding an object field of "status"
```

If defining interface on the frontend: 
- Make API call 
- Pull out the properties 

### Implementing Interface 
To define a class that implements an Interface

```ts
class ExpressError extends Error implements IExpressError {
	status: ErrorStatus;
	
	constructor(message: ErrorMessage, status: ErrorStatus) {
		super(message);
		this.status = status;
	}
}
```

