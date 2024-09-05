To display based on a conditional, can either use && boolean (bc && returns last value if truthy) or ternary 
```jsx
<article className="gap-2 items-center flex">
	{user?.organization && (
	<>
		<div className="space-y-2.5">
			<img
			classname="size-11"
			alt="Org Icon"
			src={placeholderCollegeIcon}
			/>
		</div>
		<div className="leading-5">
			<p className="text-base font-bold w-60">
			{user.organization.displayName}
			</p>
		</div>
	</>
	)}
</article>

//OR use ternary 
<article className="gap-2 items-center flex">
	{user?.organization ? (
	<>
		<div className="space-y-2.5">
			<img
			classname="size-11"
			alt="Org Icon"
			src={placeholderCollegeIcon}
			/>
		</div>
		<div className="leading-5">
			<p className="text-base font-bold w-60">
			{user.organization.displayName}
			</p>
		</div>
	</> : null
	)}
</article>


```

