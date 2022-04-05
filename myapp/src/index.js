import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createTheme, ThemeProvider} from '@mui/material';
import {purple} from '@mui/material/colors';


const currentName = "Kristina";

const theme = createTheme({
  palette:{
    mode: 'light',
  },
  status: {
    danger: purple[200],
  },

});



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App name={currentName} topPosition="100px"/>
</ThemeProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


