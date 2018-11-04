import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem"
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
        <MuiThemeProvider>
          <div>
            <TextField
              hintText="Enter your Name"
              floatingLabelText="Name"
              onChange={(event, newValue) => this.setState({ first_name: newValue })}
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
              <MenuItem value={"Entrepreneur"} primaryText="Entrepreneur" />
              <MenuItem value={"Investor"} primaryText="Investor" />
            </SelectField>
            <br />

            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Register;