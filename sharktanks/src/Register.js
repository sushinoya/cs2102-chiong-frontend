import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import axios from 'axios'
import Login from './Login'
import formStyles from './FormStyles.module.scss'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      email: null,
      role: null,
      password: null,
    }
  }
  
  handleClick = (event) => {
    var apiBaseUrl = 'http://localhost:8080/'
    console.log(
      'values',
      this.state.name,
      this.state.email,
      this.state.role,
      this.state.password
    )
    var self = this
    var payload = {
      name: this.state.name,
      emailAddress: this.state.email,
      role: this.state.role,
      password: this.state.password,
    }

    if (!payload.name || !payload.emailAddress || !payload.role || !payload.password) {
      alert('All fields must be filled!');
      return
    }

    axios
      .post(apiBaseUrl + 'createUser', payload)
      .then(function(response) {
        console.log(response)
        if (response.data.code == 200) {
          console.log("registration successfull");
          alert("Registration successful! Proceed to Login :)");
        } else {
          alert("Account already exists or infomation entered is invalid!");
        }
      })
      .catch(function(error) {
        console.log(error)
        alert("Account already exists or infomation entered is invalid!");
      })
  }

  handleChangeRole = (event, index, value) => this.setState({ role: value })

  render() {
    return (
      <div>
        <div className={formStyles.flexCenter}>
          <TextField
            hintText="Enter your Name"
            floatingLabelText="Name"
            onChange={(event, newValue) =>
              this.setState({ name: newValue })
            }
          />
          <br />
          <TextField
            hintText="Enter your Email"
            type="email"
            floatingLabelText="Email"
            onChange={(event, newValue) => this.setState({ email: newValue })}
          />
          <br />

          <SelectField
            hintText="Select your Role"
            floatingLabelText="Role"
            value={this.state.role}
            onChange={this.handleChangeRole}
          >
            <MenuItem value={'Entrepreneur'} primaryText="Entrepreneur" />
            <MenuItem value={'Investor'} primaryText="Investor" />
          </SelectField>
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
            label="Register"
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
export default Register
