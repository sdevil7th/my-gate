import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Communications from "./containers/Communications/Communications";
import Discussion from "./containers/Discussion/Discussion";
import Comment from "./containers/Comment/Comment";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Communications} />
          <Route
            exact
            path="/discussion/:discussion"
            component={Communications}
          />
          <Route
            exact
            path="/discussion/:discussion/addcomment"
            component={Comment}
          />
          <Redirect from="/" to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
