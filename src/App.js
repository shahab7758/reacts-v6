import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Details from './Details'
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Router>
        <Switch>
          <Route path='/details/:id'>
            <Details />
          </Route>
          <Route path="/">
          <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById("root"));
