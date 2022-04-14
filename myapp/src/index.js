import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createTheme, ThemeProvider} from '@mui/material';
import {purple, yellow} from '@mui/material/colors';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const currentName = "Kristina";

const theme = createTheme({
  palette:{
    mode: 'dark',
    primary: {
      main: yellow[200],
    },
    secondary: {
      main: yellow[200],
    },
  },
  status: {
    danger: purple[100],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App name={currentName} topPosition="100px"/>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


