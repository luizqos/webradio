import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Radio from "./pages/station/radio";

export default function Rota() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/radio/:radio" component={Radio} />
      <Route path="*" render={() => "404 Not found!"} />
    </Switch>
  );
}
