import React from "react";

import { Route as ReactDOMRoute, Redirect } from "react-router-dom";

import { useAuth } from "../hooks/AuthContext";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth();


  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "/MainPage",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
