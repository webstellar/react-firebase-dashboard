import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSession } from "../firebase/UserProvider";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user, isAdmin } = useSession();

  return (
    <Route
      {...rest}
      render={(props) => {
        const id = props.match.params.id;

        if (!!user && (user.uid === id || isAdmin)) {
          return <Component {...props} />;
        } else {
          return <Navigate to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
