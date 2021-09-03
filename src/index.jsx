import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import initStore from './store/initStore';
import { CssBaseline } from "@material-ui/core";
import {ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";

const store = initStore();

render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

