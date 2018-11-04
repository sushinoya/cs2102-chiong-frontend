import React, { Component } from 'react';
import './App.css';
import WelcomePage from "./WelcomePage";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes.js";
import AppBar from "material-ui/AppBar"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {
  render() {
    return (
      <div className="root">
        <MuiThemeProvider>
          <AppBar
            title="SharkTanks"
          >
          </AppBar>
          <Router className="root">
            <Routes />
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;