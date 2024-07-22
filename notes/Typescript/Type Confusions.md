# Destructured Object 

How to "Type" a destructured object: 
https://www.typescriptlang.org/docs/handbook/variable-declarations.html#property-renaming 

```ts
/** Calculate monthly payment and return. */

//https://www.typescriptlang.org/docs/handbook/variable-declarations.html#property-renaming

function calcMonthlyPayment(
{ amount, years, rate }: { amount: number, years: number, rate: number; }
) {
	const monthsInYear = 12;
	const monthlyRate = (rate / 100) / monthsInYear;
	const n = Math.floor(years * monthsInYear);
		return (
			(monthlyRate * amount) /
			(1 - Math.pow((1 + monthlyRate), -n))
		);
}
```

