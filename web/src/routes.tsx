import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";
import CreateOrphanage from "./pages/CreateOrphanage";
import Orphanage from "./pages/Orphanage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useAuth } from "./context/OrphanagesContext";
import Dashboard from "./pages/Dashboard";

function CustomRoute({ isPrivate = false, ...rest }) {
  const { signed } = useAuth();

  if (isPrivate && !signed) {
    return <Redirect to="/login" />;
  } else if (signed && (rest.path === "/login" || rest.path === "/register")) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} />;
}

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <CustomRoute path="/" exact component={Landing} />
        <CustomRoute path="/login" component={Login} />
        <CustomRoute path="/register" component={Register} />
        <CustomRoute isPrivate path="/app" component={OrphanagesMap} />
        <CustomRoute isPrivate path="/dashboard" component={Dashboard} />
        <CustomRoute
          isPrivate
          path="/orphanages/create"
          component={CreateOrphanage}
        />
        <CustomRoute isPrivate path="/orphanages/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
