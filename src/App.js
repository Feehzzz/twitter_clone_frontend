import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/';
import Timeline from './pages/Timeline/';
import Register from './pages/Register/';
import Forgot from './pages/Forgot/';
import NotFound from './pages/Notfound/';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/timeline" exact component={Timeline} />
        <Route path="/register" exact component={Register} />
        <Route path="/forgot" exact component={Forgot} />
        <Route component={NotFound} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
