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
import LoggedStatusIndicator from './LoggedStatusIndicator'
import { NavLink } from 'react-router-dom'

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
        height: 60,
      },
      drawer: {
        width: 200,
      },
    })

    return (
      <div className="root">
        <Router className="root">
          <MuiThemeProvider muiTheme={muiTheme}>
            <>
              <AppBar
                title="SHARKTANKS"
                onLeftIconButtonClick={this.handleToggle}
                iconElementRight={<LoggedStatusIndicator />}
              />
              <Routes />

              <Drawer
                open={this.state.open}
                docked={false}
                onRequestChange={(open) => this.setState({ open })}
              >
                <NavLink className="noUnderline" to="/">
                  <MenuItem onClick={this.handleToggle}>Home Page</MenuItem>
                </NavLink>
                <NavLink className="noUnderline" to="/projects">
                  <MenuItem onClick={this.handleToggle}>All Projects</MenuItem>
                </NavLink>
                <NavLink className="noUnderline" to="/categories">
                  <MenuItem onClick={this.handleToggle}>
                    {' '}
                    Projects By Category{' '}
                  </MenuItem>
                </NavLink>
                <NavLink className="noUnderline" to="/create">
                  <MenuItem onClick={this.handleToggle}>
                    Add New Project
                  </MenuItem>
                </NavLink>
              </Drawer>
            </>
          </MuiThemeProvider>
        </Router>
      </div>
    )
  }
}

export default App
