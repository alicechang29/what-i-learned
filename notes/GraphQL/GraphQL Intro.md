"App teams spend 2/3 of their time on service integration, not feature delivery" - Apollo

Non-technical
1) DevX: GraphQL is friendly to humans (-from Paypal) It's readable, explorable

Technical
2) Overfetching / underfetching: Client-shaped queries (performance is mitigated w/this)
3) Parallel requests instead of getting ID, and making subsequent requests
4) Strictly typed / get free validations
5) FAST dev speed: Flexible / easy to change
6) Tailored to clients needs
7) Self-documented
8) No need to version (*client gen-queries)


- Good fit for microservices

# What is it? 
- GraphQL is a **"declarative"** data fetching language 
	- List the data requirements of WHAT data is needed 
	- NOT focus on HOW to get the data 
- GraphQL services can be built in any language 
- Spec for client-server communication 
	- Spec = capabilities/characteristics of a language 
		- common vocab 

Some Design principles 
- Hierarchical - fields are nested within other fields 
	- Data is shaped like the query when it returns 
- Strongly Typed 
	- each data point has a type and will be validated against 

Origins: 
- FB wanted to improve how data was being sent to client apps 
- companies that use: IBM, Intuit, Airbnb
- Shortcomings of REST API 
	- It Overfetches 
		- To get info about single character, make GET request and returns huge amount of data even though only need few pieces (name, height)
	- It Underfetches 
		- To get info about the movies the character is in, need to make a GET request for each of the films 
GET 
```json
{
  "name": "Luke Skywalker",
  "height": "172",
  "mass": "77",
  "hair_color": "blond",
  "skin_color": "fair",
  "eye_color": "blue",
  "birth_year": "19BBY",
  "gender": "male",
  "homeworld": "https://swapi.co/api/planets/1/",
  "films": [
    "https://swapi.co/api/films/2/",
    "https://swapi.co/api/films/6/",
    "https://swapi.co/api/films/3/",
    "https://swapi.co/api/films/1/",
    "https://swapi.co/api/films/7/"
  ],
  "species": [
    "https://swapi.co/api/species/1/"
  ],
  "vehicles": [
    "https://swapi.co/api/vehicles/14/",
    "https://swapi.co/api/vehicles/30/"
  ],
  "starships": [
    "https://swapi.co/api/starships/12/",
    "https://swapi.co/api/starships/22/"
  ],
  "created": "2014-12-09T13:50:51.644000Z",
  "edited": "2014-12-20T21:17:56.891000Z",
  "url": "https://swapi.co/api/people/1/"
}
```


In GraphQL App, can just do: 

```js
{
  person(personID:3) {
    name
    height
    filmConnections {
	    films{
		    title
	    }
	}
  }
}

```


Data Returned 

```json

{
  "data": {
    "person": {
      "name": "R2-D2",
      "height": 96,
      "filmConnection": {
        "films": [
          {
            "title": "A New Hope"
          },
          {
            "title": "The Empire Strikes Back"
          },
          {
            "title": "Return of the Jedi"
          },
          {
            "title": "The Phantom Menace"
          },
          {
            "title": "Attack of the Clones"
          },
          {
            "title": "Revenge of the Sith"
          }
        ]
      }
    }
  }
}
```

**Data returned is in the same SHAPE as the query** 
# The language 

Differences between SQL and GraphQL (which are not comparable at all - apples to oranges)
- SQL
	- send SQL to databases 
	- store data in data tables 
- GraphQL
	- send GraphQL queries to API
	- store data anywhere (DB, multiple DB, REST API's, file systems WebSockets, other GraphQL API's)

### Data Schema 

GraphQL API's have a defined schema where each piece of data has a TYPE. 
- Data is TYPED like it is in typescript, can define your own type  
- `Query` type = queries that can be run 

```

type Lift {
  # The unique identifier for a `Lift` (id: "panorama")
  id: ID!

  # The name of a `Lift`
  name: String!

  # The current status for a `Lift`: `OPEN`, `CLOSED`, `HOLD`
  status: LiftStatus
  
  # A list of trails that this `Lift` serves
  trailAccess: [Trail!]!

# A `Trail` is a run at a ski resort
type Trail {
  # A unique identifier for a `Trail` (id: 'hemmed-slacks')
  id: ID!

  # The name of a `Trail`
  name: String!

# An enum describing the options for `LiftStatus`: `OPEN`, `CLOSED`, `HOLD`
enum LiftStatus {
  OPEN
  CLOSED
  HOLD
}

type Query {
  # A list of all `Lift` objects
  allLifts(status: LiftStatus): [Lift!]!

  # A list of all `Trail` objects
  allTrails(status: TrailStatus): [Trail!]!

  # Returns a `Lift` by `id` (id: "panorama")
  Lift(id: ID!): Lift!

  # Returns a `Trail` by `id` (id: "old-witch")
  Trail(id: ID!): Trail!
```


### Syntax 

`Query` = SELECT 
`Mutation` = INSERT, UPDATE, or DELETE
`Subscription` = listen for data changes over socket connections 

## How to Query for Data (READ)

1. "Select" what you want. It can be a query type or some other custom type 
2. Check schema to see what are the available options for the data type selected 
	1. eg: For `type Lift`, options are `name`, `status`, `trailAccess`
3. Can now "join" datatypes 

```
query {
    Lift(id: "jazz-cat") {
      name
      status
      trailAccess {
        name
        status
      }
    }
```


### Creating Fragments (~spread operator in JS)
Fragments are used to have have to "duplicate" re-writing the same queries 

```

fragment liftInfo on Lift {
  name
  status
  capacity
  night
  elevationGain
}

fragment trailInfo on Trail {
  name
  difficulty
}

query {
    Lift(id: "jazz-cat") {
      ...liftInfo
      trailAccess {
        ...trailInfo
      }
    }
    Trail(id: "river-run") {
      ...trailInfo
      groomed
      trees
      night
      accessedByLifts {
        ...liftInfo
      }
    }
}
```


Filter using Query Arguments 

```graphql
query closedLifts {
    allLifts(status: "CLOSED" sortBy: "name") {
      name
      status
    }
}
```



## How to Mutate Data (WRITE)

1. Define the mutation query 
	1. Can only mutate if the schema allows it 
2. Mutation returns updated data 

```
# Change status of lift 

mutation closeLift{
  setLiftStatus(id:"jazz-cat" status:OPEN){
    name
    status
  }
}


# Returns 

{
  "data": {
    "setLiftStatus": {
      "name": "Jazz Cat",
      "status": "OPEN"
    }
  }
}
```

### Using Query Variables to Mutate Data 

1. Define the mutation query by inserting variables using `$` and data type - check schema to see what data type 
2. Within Query Variables section of GraphQL playground, specify fields and values of the variables 

```

mutation closeLift($id:ID!){
  setLiftStatus(id:$id status:CLOSED){
    id
    name
    status
  }
}


# Query Variables

{
  "id": "jazz-cat"
}
```


## How to Use Subscriptions (Listen for Data Changes)

1. check schema for available subscription queries 
2. Write the subscription query 
3. When values change, query will return updated data 

- Subscription listens for changes over Websocket 
- When starting the subscription query, it opens the websocket 

```
subscription{
  liftStatusChange{
    name
    capacity
    status
  }
}
```

## Introspection - Querying the Schema 

To see the schema of the GraphQL API: 
```
query {
  __schema {
    types {
      name
      description
    }
  }
}
```

To see the schema of a particular data type: 

```
query liftDetails {
  __type(name:"Lift") {
    name
    fields {
      name
      description
      type {
        name
      }
    }
  }
}
```




# Graph Theory 

![[Pasted image 20240629200902.png]]

### Terms 

- 4 "circles", each represents a data point, called "Node" / "Vertices"
- Lines between each node = "Edges"

#### Trees 
- a graph where nodes are arranged hierachically 
- It is a tree if there is a ROOT node 
	- All other nodes are linked to it as children (organizational chart - CEO = root)

#### Binary Tree 
- each node has no more than 2 child noes 

