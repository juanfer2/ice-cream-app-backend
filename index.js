import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import favicon from 'serve-favicon';
import { ApolloServer } from 'apollo-server-express'

import { mogoose } from './src/config/database.config'
import { typeDefs } from  './src/graphql/schema';
import { resolvers } from './src/graphql/resolvers/resolvers'

const app = express();

/*Graphql Server */
const server = new ApolloServer({ typeDefs, resolvers })
server.applyMiddleware({app})

app.use(morgan('dev'))
app.use(cors());
app.use(express.json());

/* confing routes */
app.use( require('./src/routes/routes.route') );

/* public */
express.static( __dirname + '/public' )
app.use( express.static( __dirname + '/public' ) )

/* favicon */
app.use( favicon( __dirname + '/favicon.ico' ) )

app.listen({port: 4000}, () => console.log(`Server is run on ${server.graphqlPath}`));