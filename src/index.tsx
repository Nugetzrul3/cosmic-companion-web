import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client/react";
import client from "./apollo/client";
import App from "./App";

const container = document.getElementById("root");

if (!container) {
    throw new Error("Root container missing in index.html");
}

const root = ReactDOM.createRoot(container as HTMLElement);

root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>
);