import React from "react";
import { Route, Redirect } from "react-router-dom";
// FUNCTION
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => <Component {...props} />
      }
    />
  );
};
export default PrivateRoute;
