import React, { Component } from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles';
import { blue500, blue700 } from 'material-ui/colors';
import './styles/global.scss';

import Index from './components/index';

const muiTheme = createMuiTheme({
  fontFamily: 'Work Sans, sans-serif',
  palette: {
    primary1Color: blue500,
    primary2Color: blue700,
    pickerHeaderColor: blue500
  }
});

render(
  <MuiThemeProvider theme={muiTheme}>
    <Index />
  </MuiThemeProvider>,
  document.getElementById('app')
);