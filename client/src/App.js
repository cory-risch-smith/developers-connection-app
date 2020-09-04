/** @format */

import React from 'react';
import { Layout } from './Hoc/Layout';
import Home from './Components/Home/Index';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './Components/LoginRegister/Login';
import Register from './Components/LoginRegister/Register';
import Users from './Components/Users/Users';

function App(props) {
  return (
    <Layout>
      <Switch>
        <Route {...props} exact path='/' component={Home} />
        <Route {...props} exact path='/login' component={Login} />
        <Route {...props} exact path='/register' component={Register} />
        <Route {...props} exact path='/users' component={Users} />
      </Switch>
    </Layout>
  );
}

export default App;
