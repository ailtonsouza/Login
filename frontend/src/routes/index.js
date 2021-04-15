import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignIn from '../Pages/SignIn';
import CreateUser from '../Pages/CreateUser';
import MainPage from '../Pages/MainPage';

const Routes = () => (
<Switch>
  <Route path="/" exact component={SignIn} />
  <Route path="/CreateUser" exact component={CreateUser} />
  <Route path="/MainPage" exact component={MainPage} />
</Switch>
)

export default Routes;