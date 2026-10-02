# graphql-api

A small GraphQL API built with Apollo Server. It serves users and movies from in-memory data, with queries to read them and mutations to create a user or rename one.

Data lives in `fakeData.js` and `movieData.js`. It resets every time the server restarts. This is a sample API, not a production service.

## Stack

- Node.js
- [Apollo Server](https://www.apollographql.com/docs/apollo-server) 3
- GraphQL

## Run it

```bash
npm install
npm start
```

Apollo Server prints a URL, usually `http://localhost:4000`. Open that URL for the Apollo sandbox and try a query there.

## Schema

**Queries**

- `users` — all users
- `user(id: ID!)` — one user
- `movies` — all movies
- `movie(name: String!)` — one movie by exact name

**Mutations**

- `createUser(input: CreateUserInput!)` — add a user (`name`, `gender`, optional `nationality`)
- `updateUsername(input: UpdateUsernameInput)` — rename a user by `id`

**Nationality** values: `CANADA`, `BRAZIL`, `GHANA`, `TOGO`, `CAMEROON`, `NIGERIA`. The default on create is `BRAZIL`.

A user's `favoriteMovies` are movies published from 2000 through 2010. They are not stored on the user.

## Example

```graphql
query {
  users {
    id
    name
    nationality
    favoriteMovies {
      name
      yearPublished
    }
  }
}
```
