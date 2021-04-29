import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import { StylesProvider } from '@material-ui/core';

ReactDOM.render(
  <BrowserRouter>
    <StylesProvider injectFirst>
      <App />
    </StylesProvider>
    <GlobalStyle />
  </BrowserRouter>,
  document.getElementById('root'),
);


