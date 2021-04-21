import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../Pages/SignIn";
import CreateUser from "../Pages/CreateUser";
import MainPage from "../Pages/MainPage";
import PersonalInformation from "../Pages/PersonalInformation"

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/CreateUser" exact component={CreateUser} />
    <Route path="/MainPage" exact component={MainPage} isPrivate/>
    <Route path="/PersonalInformation" exact component={PersonalInformation} isPrivate/>
  </Switch>
);

export default Routes;
