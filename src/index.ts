import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import createApolloGraphqlServer from './graphql/index';

async function init() {
    const app = express();
    app.use(express.json());
    const PORT = 8000;

    

    app.get("/", (req, res) => {
        res.send("Server is running");
    });

    app.use("/graphql", expressMiddleware(await createApolloGraphqlServer()));

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

init();
