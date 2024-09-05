

Axios is promise-based HTTP client and can run in the browser and nodejs within the same codebase. 

It can make XMLHttpRequests - objects used to interact with servers. Can retrieve data from a URL without doing full page refresh. 
- Can update part of web page without disrupting user 
- can be used to retrieve any type of data, not just XML 

Automatic request body serialization 
- Turns data into JSON automatically (also handles mutli-part form data, url-encoded)

With Axios: 
```js
const url = 'https://jsonplaceholder.typicode.com/posts'
const data = {
  a: 10,
  b: 20,
};
axios
  .post(url, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  })
  .then(({data}) => {
    console.log(data);
});
```

With Fetch, need to turn data into JSON with `JSON.stringify` 
```js
const url = "https://jsonplaceholder.typicode.com/todos";
const options = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
  body: JSON.stringify({
    a: 10,
    b: 20,
  }),
};
fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```


To write go to endpoint using Axios: 
```ts
const myTeamResource = 'myTeam';

export const getTeam = async (applicantId: string): Promise<Team[]> => {
	const params = {
		params: {
		applicantId
		}
	};
	const { data } = await axios.get<Team[]>(myTeamResource, params);

	return data;
};

```

To check the endpoint myself: 
`/api/myTeam?applicantId=<value>` 
