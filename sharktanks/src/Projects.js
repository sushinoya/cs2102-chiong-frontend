import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
// import Project from "./Project";
import axios from 'axios'
import SideDrawer from './Drawer';
import Project from "./Project"

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [],
    }
  }

  getProjects = () => {
    return axios.get('http://localhost:8080/allProjects');
  }

  componentWillMount() {
    this.getProjects().then((response) => {
      console.log(response.data)
      this.setState({ projects: response.data.map(project => <Project json={project} />) });
    });
  }

  render() {
    return <div>
        <div>
          <p>Hey!</p>
            {this.state.projects}
        </div>
      </div>;
  }
}


export default Projects;