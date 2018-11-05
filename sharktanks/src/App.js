import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes.js'
import AppBar from 'material-ui/AppBar'
import { brown700, grey900, brown900, red100 } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import { NavLink, Link, Redirect } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  handleToggle = () => this.setState({ open: !this.state.open })

  render() {
    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: grey900,
        primary2Color: grey900,
        primary3Color: grey900,
        accent1Color: brown900,
        accent2Color: brown900,
        accent3Color: brown900,
      },
      appBar: {
        height: 70,
      },
      drawer: {
        width: 200,
      },
    })

    return (
      <div className="root">
        <Router className="root">
          <MuiThemeProvider muiTheme={muiTheme}>
            <AppBar
              title="SharkTanks"
              onLeftIconButtonClick={this.handleToggle}
            />
            <Routes />

            <Drawer
              open={this.state.open}
              docked={false}
              onRequestChange={open => this.setState({ open })}
            >
              <MenuItem onClick={this.handleClose}>Home Page</MenuItem>
              <MenuItem onClick={this.handleClose}>All Projects</MenuItem>
              <MenuItem onClick={this.handleClose}>
                Projects By Category
              </MenuItem>
              <MenuItem onClick={this.handleClose}>Add New Project</MenuItem>
            </Drawer>
          </MuiThemeProvider>
        </Router>
      </div>
    )
  }
}

export default App
