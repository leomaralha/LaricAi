import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import ScrollToTop from './components/utils/ScrollToTop'
import Cart from "./pages/Cart";
import LandPage from "./pages/LandPage";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Register from "./pages/Register";

const history = createBrowserHistory();

function Routes() {
  return (
    <Router history={history}>
      <ScrollToTop/>
      <Switch>
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/landPage" component={LandPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export { Routes, history };
