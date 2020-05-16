import { helloUser, greetUser } from './users.resolvers'

export const resolvers = {
    Query: {
        helloUser,
        greetUser,
        hello: () => {
            return 'hello world with GraphQL'
        },
        greet(root,  args) {
            console.log(args.name);
            return `Hello ${args.name}`
        },
    },
    // Mutation: {
    //   mutationTest: () => {
    //     return 'hello world with GraphQL'
    //   }, 
    // }
}