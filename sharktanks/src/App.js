import React, { Component } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes.js";
import AppBar from "@material-ui/core/AppBar";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

class App extends Component {
  render() {

    const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#0b5994',
        },
        secondary: {
          main: '#1d83c6',
        },
      },
    });

    return <div className="root">
      <MuiThemeProvider theme={theme}>
          <AppBar title="SharkTanks" />
          <Router className="root">
            <Routes />
          </Router>
        </MuiThemeProvider>
      </div>;
  }
}

export default App;
