import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = `
    
    type Query {
        hello: String
        greet(name: String!): String
        tasks: [Task]
    }

    type Task {
        _id: ID
        title: String!
        desc: String!
        number: Int
    }

    type Mutation {
        createTask(input: InputTask): Task 
    }

    input InputTask {
        title: String!
        desc: String!
        number: Int
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});