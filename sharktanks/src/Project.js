import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
// import Project from "./Project";
import axios from 'axios'
import SideDrawer from './Drawer';

class Project extends Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      <div>
        <p>{this.props.json.description}</p>
        <p>{this.props.json.name}</p>
        <p>{this.props.json.projectid}</p>
        <p>{this.props.json.sum}</p>
        <p>{this.props.json.title}</p>
        <p>{this.props.json.url}</p>
        <p>{this.props.json.words}</p>
        <br />
      </div>
    )
  }
}


export default Project;