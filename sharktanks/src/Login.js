import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import axios from 'axios'
import { loggedInUser, localLogIn } from './LoginUtil';
import formStyles from './FormStyles.module.scss'
import { Redirect } from 'react-router-dom'
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  handleClick = (event) => {
    var apiBaseUrl = 'http://localhost:8080/'
    var self = this
    var payload = {
      emailAddress: this.state.email,
      password: this.state.password,
    }
    axios
      .post(apiBaseUrl + 'login', payload)
      .then(function(response) {
        console.log(response)
        if (response.data.code == 200) {
          const userData = response.data.user;
          console.log(userData)
          localStorage.setItem('logged-in-user', null)
          // Save in Local Storage
          localLogIn(userData)
        } else if (response.data.code == 204) {
          console.log('Email Address password do not match')
          alert('The email address and password do not match')
        } else {
          console.log('Email Address does not exists')
          alert('Email Address does not exist')
        }
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  render() {
    if (loggedInUser()) {
      return <Redirect to="/projects" />;
    }
    return (
      <div className="contain-everything">
        <div className={formStyles.flexCenter}>
          <TextField
            hintText="Enter your Email Address"
            floatingLabelText="Email Address"
            onChange={(event, newValue) => this.setState({ email: newValue })}
          />
          <br />
          <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange={(event, newValue) =>
              this.setState({ password: newValue })
            }
          />
          <br />
          <RaisedButton
            label="Login"
            primary={true}
            style={style}
            onClick={(event) => this.handleClick(event)}
          />
        </div>
      </div>
    )
  }
}
const style = {
  margin: 15,
}

export default Login
