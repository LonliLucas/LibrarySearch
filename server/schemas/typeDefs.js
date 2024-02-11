const typeDefs = `
    type Book {
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }    
    
    type User {
        _id: ID
        username: String
        email: String
        password: String
        saveBooks: [Book]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addBook(userId: ID!, book: BookInput!): User
        removeBook(userId: ID!, bookId: String!): User
    }

    input BookInput {
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }
`;

module.exports = typeDefs;
