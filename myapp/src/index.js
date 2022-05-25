import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {CircularProgress, createTheme, ThemeProvider} from '@mui/material';
import { yellow} from '@mui/material/colors';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import persistore, {store} from './store';
import { PersistGate } from 'redux-persist/integration/react';

const currentName = "Кристина";

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
    danger: yellow[300],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistore} loading={<CircularProgress/> }>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App name={currentName} topPosition="100px"/>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


