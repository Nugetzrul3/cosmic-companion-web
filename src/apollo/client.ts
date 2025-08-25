import {ApolloClient, ApolloLink, InMemoryCache} from "@apollo/client";
import { HttpLink } from "@apollo/client/link/http";

const httpLink = new HttpLink(
    {
        uri: "http://localhost:3000/graphql",
    }
);

// Auth middleware
const authMiddleware = new ApolloLink((operation, forward) => {
   const token = localStorage.getItem('token');
   operation.setContext(({ headers = {} }) => ({
       headers: {
           ...headers,
           authorization: token ? `Bearer ${token}` : ""
       }
   }));

   return forward(operation);
});

const client = new ApolloClient({
    link: authMiddleware.concat(httpLink),
    cache: new InMemoryCache()
});

export default client;
