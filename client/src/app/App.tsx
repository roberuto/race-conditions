import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import { RegularFetch } from "app/views/RegularFetch/RegularFetch";
import { SuspenseFetch } from "app/views/SuspenseFetch/SuspenseFetch";

import "./App.css";

export const App: React.FC = () => {
  return (
    <div className="app">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/regular">Regular Fetch</Link>
        <Link to="/suspense">Suspense Fetch</Link>
      </div>
      <div className="app-routes">
        <Switch>
          <Route exact path="/">
            <div className="home">Race Conditions!</div>
          </Route>
          <Route path="/regular">
            <RegularFetch />
          </Route>
          <Route path="/suspense">
            <SuspenseFetch />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
