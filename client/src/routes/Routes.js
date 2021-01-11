import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import AuthPage from "../components/pages/AuthPage";
import Products from "../components/pages/Products";
import NotFound from "../components/layout/NotFound";

const Routes = () => {
  return (
    <div className="container my-4">
      <Switch>
        <Route exact path="/" component={AuthPage} />
        <ProtectedRoute exact path="/products" component={Products} />
        <Route exact path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
};

export default Routes;
