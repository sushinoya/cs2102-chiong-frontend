import React, { Component } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes.js";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import green from '@material-ui/core/colors/green';

class App extends Component {
  render() {

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: green,
  },
});

    return <div className="root">
        <MuiThemeProvider palette={theme}>
          <AppBar title="SharkTanks" />
          <Router className="root">
            <Routes />
          </Router>
        </MuiThemeProvider>
      </div>;
  }
}

export default App;
