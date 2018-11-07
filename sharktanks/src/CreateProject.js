import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import axios from 'axios'
import formStyles from './FormStyles.module.scss'
import { loggedInUser } from './LoginUtil';
import { getAllStatuses, getAllCategories } from './Queries';

class CreateProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: null,
      description: null,
      status: null,
      userID: loggedInUser().userID,
      category: [],
      keywords: [],
      possibleStatuses: [],
      possibleCategories: []
    }
  }

  componentWillMount() {
    getAllCategories().then((data) => {
      const categories = data.data.map(x => { return x.name })
      this.setState({ possibleCategories: categories });
    });

    getAllStatuses().then((data) => {
      const statuses = data.data.map(x => { return x.statusword })
      console.log(statuses)
      this.setState({ possibleStatuses: statuses })
    });

  }

  handleClick = (event) => {
    var apiBaseUrl = 'http://localhost:8080/'

    var payload = {
      title: this.state.title,
      description: this.state.description,
      status: this.state.status,
      userID: this.state.userID,
      category: this.state.category,
      keywords: this.state.keywords
    }

    console.log(payload)

    // axios
    //   .post(apiBaseUrl + 'createProject', payload)
    //   .then(function (response) {
    //     console.log(response)
    //     if (response.data.code == 200) {
    //       console.log("project created");
    //       alert("Project " + this.state.title + " created successfully!");
    //     } else {
    //       alert("Information entered is invalid. Please check before proceeding");
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //     alert("Information entered is invalid. Please check before proceeding");
    //   })
  }

  handleChangeCategory = (event, index, value) => this.setState({ category: value })
  handleChangeStatus = (event, index, value) => this.setState({ status: value })

  render() {

    const categoryMenuItems = this.state.possibleCategories
    .map((x) => {
      return <MenuItem value={x} primaryText={x} />
    });

    const statusMenuItems = this.state.possibleStatuses
    .map((x) => {
      return <MenuItem value={x} primaryText={x} />
    });

    return (
      <div>
        <div className={formStyles.flexCenter}>
          <TextField
            hintText="Enter Project Title"
            floatingLabelText="Title"
            onChange={(event, newValue) =>
              this.setState({ title: newValue })
            }
          />
          <br />
          <TextField
            hintText="Enter Project Description"
            floatingLabelText="Project Description"
            onChange={(event, newValue) => this.setState({ description: newValue })}
          />
          <br />

          <SelectField
            hintText="Select Project Category"
            floatingLabelText="Project Category"
            value={this.state.category}
            onChange={this.handleChangeCategory}
          >
            {categoryMenuItems}
          </SelectField>

          <br />

          <SelectField
            hintText="Select Project Status"
            floatingLabelText="Project Status"
            value={this.state.status}
            onChange={this.handleChangeStatus}
          >
            {statusMenuItems}
          </SelectField>

          <TextField
            hintText="Separated by commas"
            floatingLabelText="Keywords (optional)"
            onChange={(event, newValue) =>
              this.setState({ keywords: newValue })
            }
          />
          <br />
          <RaisedButton
            label="Create Project"
            primary={true}
            onClick={(event) => this.handleClick(event)}
          />
        </div>
      </div>
    )
  }
}


export default CreateProject
