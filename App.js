import React from 'react'
import Pages from './Pages'
import Ajax from './Ajax'
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import { MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const themeLight = createMuiTheme({
  palette: {
    background: {
      default: "#fff8ff"
    }
  }
});

global.amount=0;
global.pages=[];
global.toServer=[];
global.server = "http://23.91.21.132/Server.aph?Command=";
global.gotoPage = (page) => { 
  global.pages.push(page)
}; 


function App() {
  global.ajax=new Ajax();
  return (
    <MuiThemeProvider theme={themeLight}>
      <CssBaseline />
      <Container  classmaxWidth="sm">
        <AppBar position="static">TrainTasker</AppBar>
        <Pages />
      </Container>
    </MuiThemeProvider>
  )
}

export default App
