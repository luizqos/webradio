import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Antena1 from "./pages/station/antena1";
import Dot977 from "./pages/station/977";
import Radio from "./pages/station/radio";

export default function Rota() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      {/* <Route exact path="/antena1">
        <Antena1 />
      </Route>
      <Route exact path="/977">
        <Dot977 />
      </Route> */}
      <Route exact path="/radio/:radio" component={Radio} />
    </Switch>
  );
}
