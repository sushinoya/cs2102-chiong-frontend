import React from 'react'
import { redirect, Switch, Route } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import WelcomePage from './WelcomePage'
import Projects from './Projects'
import ProjectPage from './ProjectPage'
import TestPage from './TestPage'

const Routes = () => (
  <>
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/test" component={TestPage} />
      <Route path="/project/:projectID" component={ProjectPage} />
      <Route path="*" component={WelcomePage} />
    </Switch>
  </>
)

export default Routes
