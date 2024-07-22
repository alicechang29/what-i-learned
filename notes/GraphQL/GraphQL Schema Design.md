
# Types 

**Type**  - Have fields, is an object type 
- describes app's core features 
```

# declaring a custom scalar types: 

scalar DateTime 

enum PhotoCategory {
    SELFIE
    PORTRAIT
    ACTION
    LANDSCAPE
    GRAPHIC
}

# declaring a type 

type User {
    githubLogin: ID!
    name: String
    avatar: String
    postedPhotos: [Photo!]!
}

type Photo {
    id: ID!
    name: String!
    url: String!
    description: String
    created: DateTime!
    category: PhotoCategory!
    postedBy: User!
}



```

Npm Package of custom types: https://www.npmjs.com/package/graphql-custom-types

## Scalar Types 
Do not have fields, it is NOT an object type 
- ID
- String
- Int
- Float
- Boolean
- Enum 

## Non-nullable  `!`
	- `String! `

## Lists
- surround type with `[ ]`
	- `[String]`
	- `[PhotoCategory]`

|list declaration|definition|
|---|---|
|`[Int]`|A list of nullable integer values|
|`[Int!]`|A list of non-nullable integer values|
|`[Int]!`|A non-nullable list of nullable integer values|
|`[Int!]!`|A non-nullable list of non-nullable integer values|

# Connections 

## 1-1 Connections 

"Edge" - a connection between 2 objects 
- `postedBy`


Important to make services UNDIRECTED if possible = Flexibility 
- Have a link between user and photo from both ends 
	- When querying user, link to all photos `postedPhotos` for that user 
	- When querying photo, link to the `postedBy` user

### Add 1-1 connection to Root Types 
- to make a type available in a query, need to define it as a Query root type (User, Photos)
#### To Define a Query Root Type 
```
type Query {
    totalPhotos: Int!
    allPhotos: [Photo!]!
    totalUsers: Int!
    allUsers: [User!]!
}

schema {
    query: Query
}
```



