import React from 'react'
import { redirect, Switch, Route } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import WelcomePage from './WelcomePage'
import Projects from './Projects'
import ProjectPage from './ProjectPage'
import TestPage from './TestPage'
import Categories  from './Categories'
import CreateProject from './CreateProject';
import Landing from './Landing';

const Routes = () => (
  <>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={WelcomePage} />
      <Route exact path="/register" component={WelcomePage} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/categories" component={Categories} />
      <Route exact path="/test" component={TestPage} />
      <Route exact path="/create" component={CreateProject} />
      <Route path="/project/:projectID" component={ProjectPage} />
      <Route path="*" component={WelcomePage} />
    </Switch>
  </>
);

export default Routes
