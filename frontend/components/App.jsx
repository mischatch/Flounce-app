import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProjectContainer from "./project/project_container";


const App = () => {
  let headerClass = 'header';
  if(window.location.hash === "#/login" || window.location.hash === "#/signup"){
    headerClass = 'hidden';
  }
  return (
  <div>
    <header className={headerClass}>
      <Link to='/' >
      <img src={ window.staticImages.logo12 }  alt="logo" className="logo" />
      </Link>
      <GreetingContainer />
    </header>

      <ProjectContainer />

    <Switch>

      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />

    </Switch>
  </div>
)};

export default App;
