import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LandingPage, MembersInfo } from "./pages/";
import "./styles/main.scss";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Router>
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/ourTeam">
            <MembersInfo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
