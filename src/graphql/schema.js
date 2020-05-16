import { importSchema } from 'graphql-import'

// const MyUserType = importSchema('src/graphql/user.graphql');
const Queries = importSchema('src/graphql/schema.graphql');

const typeDefs = [ Queries ]
// const typeDefs = importSchema('src/graphql/schema.graphql');

export { typeDefs }