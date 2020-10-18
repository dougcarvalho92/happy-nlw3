import React from "react";
import { Switch, Route, Router, matchPath } from "react-router-dom";
import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";
import CreateOrphanage from "./pages/CreateOrphanage";
import Orphanage from "./pages/Orphanage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useAuth } from "./context/AuthContext";

import Confirmation from "./pages/Confirmation";
import Dashboard from "./pages/Dashboard";
import history from "./history";
import PendingOrphanages from "./pages/PendingOrphanages";

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();

  const Loading = () => {
    return <div className="loading">Carregando</div>;
  };

  function CustomRoute({ isPrivate = false, ...rest }) {
    if (loading) {
      return <Loading />;
    }
    if (isPrivate && !signed) {
      history.push("/login");
    }

    return <Route {...rest} />;
  }

  return (
    <Router history={history}>
      <Switch>
        <CustomRoute path="/" exact component={Landing} />
        <CustomRoute path="/login" component={Login} />
        <CustomRoute path="/register" component={Register} />
        <CustomRoute path="/app" component={OrphanagesMap} />
        <CustomRoute isPrivate path="/confirmation" component={Confirmation} />
        <CustomRoute isPrivate exact path="/dashboard" component={Dashboard} />
        <CustomRoute
          isPrivate
          path="/dashboard/pending"
          component={PendingOrphanages}
        />

        <CustomRoute
          isPrivate
          path="/orphanages/create"
          component={CreateOrphanage}
        />
        <CustomRoute  path="/orphanages/:id" component={Orphanage} />
      </Switch>
    </Router>
  );
};

export default Routes;
