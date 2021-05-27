import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import { StylesProvider } from '@material-ui/core';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';

// Apollo-client Pub-Sub Settings
const link = new WebSocketLink({
  uri: `ws://localhost:5000/`,
  options: {
    reconnect: true,
  },
});

const client = new ApolloClient({
  link,
  uri: "http://localhost:5000/",
  cache: new InMemoryCache(),
});


ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <StylesProvider injectFirst>
        <App />
      </StylesProvider>
    </ApolloProvider>
    <GlobalStyle />
  </BrowserRouter>,
  document.getElementById('root'),
);


