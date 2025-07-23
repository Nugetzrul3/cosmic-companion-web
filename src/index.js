import ReactDOM from 'react-dom/client';
import client from "./apollo/client";
import { ApolloProvider } from "@apollo/client"
import React from 'react';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <App />
      </ApolloProvider>
  </React.StrictMode>
);
