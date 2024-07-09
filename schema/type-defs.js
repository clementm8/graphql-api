const { gql } = require('apollo-server');

const typeDefs = gql`
    type User{
        id: ID!
        name: String!
        gender: String!
        nationality: Nationality!
        friends: [User]
        favoriteMovies: [Movie]
    }

    type Movie{
        id: ID!
        name: String!
        yearPublished: Int!
        genre: String!
        isInTheatres: Boolean! 
    }

    type Query{
        users: [User!]!
        user(id: ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!
    }

    input CreateUserInput{
        name: String!
        gender: String!
        nationality: Nationality = BRAZIL
    }

    input UpdateUsernameInput{
        id: ID!
        newUserName: String!
    }

    type Mutation{
        createUser(input: CreateUserInput!): User!
        updateUsername(input: UpdateUsernameInput): User
    }

    enum Nationality{
        CANADA
        BRAZIL
        GHANA
        TOGO
        CAMEROON
        NIGERIA
    }
`;

module.exports = { typeDefs };