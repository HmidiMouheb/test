import React from "react";
import "./App.css";
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";
import UserPosts from "./Components/UserPosts";
import UserCards from "./Components/UserCards";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={UserCards} />
        <Route exact path="/posts/:id" component={UserPosts} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
