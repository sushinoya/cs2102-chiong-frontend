import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleClick = (event) => {
    var apiBaseUrl = "http://localhost:8080/";
    var self = this;
    var payload = {
      "emailAddress": this.state.email,
      "password": this.state.password
    }
    axios.post(apiBaseUrl + 'login', payload)
      .then(function (response) {
        console.log(response);
        if (response.data.code == 200) {
          alert("Login successfull");
          console.log("Login successfull");
          // var uploadScreen = [];
          // uploadScreen.push(<UploadScreen appContext={self.props.appContext} />)
          // self.props.appContext.setState({ loginPage: [], uploadScreen: uploadScreen })
        }
        else if (response.data.code == 204) {
          console.log("Email Address password do not match");
          alert("Email Address password do not match")
        }
        else {
          console.log("Email Address does not exists");
          alert("Email Address does not exist");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
          <div>
            <TextField
              // hintText="Enter your Email Address"
              label="Email Address"
              onChange={(event, newValue) => this.setState({ email: newValue })}
            />
            <br />
            <TextField
              type="password"
              // hintText="Enter your Password"
              label="Password"
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
            <Button onClick={(event) => this.handleClick(event)} >Submit</Button>
          </div>
      </div>
    );
  }
}

export default Login;