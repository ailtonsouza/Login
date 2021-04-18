import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../Pages/SignIn";
import CreateUser from "../Pages/CreateUser";
import MainPage from "../Pages/MainPage";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/CreateUser" exact component={CreateUser} />
    <Route path="/MainPage" exact component={MainPage} isPrivate/>
  </Switch>
);

export default Routes;
