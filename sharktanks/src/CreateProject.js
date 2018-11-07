import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import axios from 'axios'
import Login from './Login'
import formStyles from './FormStyles.module.scss'
import { loggedInUser } from './LoginUtil';

class CreateProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      status: '',
      userID: loggedInUser().userID,
      category: ''
    }
  }

  handleClick = (event) => {
    var apiBaseUrl = 'http://localhost:8080/'

    var payload = {
      title: this.state.title,
      description: this.state.description,
      status: this.state.status,
      userID: this.state.userID,
      category: this.state.category
    }

    axios
      .post(apiBaseUrl + 'createProject', payload)
      .then(function (response) {
        console.log(response)
        if (response.data.code == 200) {
          console.log("project created");
          alert("Project " + this.state.title + " created successfully!");
        } else {
          alert("Information entered is invalid. Please check before proceeding");
        }
      })
      .catch(function (error) {
        console.log(error)
        alert("Information entered is invalid. Please check before proceeding");
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
            label="CreateProject"
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
export default CreateProject
