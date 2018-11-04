import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SelectField from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import axios from 'axios';
import Login from './Login'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      role: '',
      password: ''
    }
  }

  handleClick = (event) => {
    var apiBaseUrl = "http://localhost:8080/";
    console.log("values", this.state.name, this.state.email, this.state.role, this.state.password);
    var self = this;
    var payload = {
      "name": this.state.name,
      "emailAddress": this.state.email,
      "role": this.state.role,
      "password": this.state.password
    }

    axios.post(apiBaseUrl + 'createUser', payload)
      .then(function (response) {
        console.log(response);
        if (response.data.code == 200) {
          //  console.log("registration successfull");
          var loginscreen = [];
          loginscreen.push(<Login parentContext={this} />);
          var loginmessage = "Not Registered yet.Go to registration";
          self.props.parentContext.setState({
            loginscreen: loginscreen,
            loginmessage: loginmessage,
            buttonLabel: "Register",
            isLogin: true
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleChangeRole = (event, index, value) => this.setState({ role: value });

  render() {
    return (
      <div>
          <div>
            <TextField
              label="Name"
              onChange={(event, newValue) => this.setState({ first_name: newValue })}
            />
            <br />
            <TextField
              type="email"
              label="Email"
              onChange={(event, newValue) => this.setState({ email: newValue })}
            />
            <br />

            <SelectField
              label="Role"
              value={this.state.role}
              onChange={this.handleChangeRole}
            >
              <MenuItem value={"Entrepreneur"} primaryText="Entrepreneur" />
              <MenuItem value={"Investor"} primaryText="Investor" />
            </SelectField>
            <br />

            <TextField
              type="password"
              label="Password"
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
            <Button onClick={(event) => this.handleClick(event)}> Submit </Button>
          </div>
      </div>
    );
  }
}

export default Register;