import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import WelcomePage from "./WelcomePage";
import Projects from './Projects';

const Routes = () => (
  <>
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="login" component={Login} />
      {/* <Route path="/meeting/:showId" component={ShowPage} /> */}
      <Route exact path="/register" component={Register} />
      <Route exact path="/projects" component={Projects} />
      <Route path="*" component={WelcomePage} />
    </Switch>
  </>
);

export default Routes;
