import React from 'react';
import './App.css';
import App from './containers/App' 
import { createMuiTheme, ThemeProvider  } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
		primary: 
		{
			main: "#ff9e80",	
		},
		secondary: {
			main: "#fbe9e7",
		},	
  },
});


function app() {
  return (
		<ThemeProvider theme={theme}>
    	<App/>
		</ThemeProvider>
  );
}

export default app;
