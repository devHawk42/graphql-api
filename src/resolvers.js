import {tasks} from "./sample";

export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello World with GQL'
        },
        greet(root, { name }) {
            return `Hello ${name}`;
        },
        tasks(){
            return tasks;
        }
    }
};