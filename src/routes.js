import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/app";
import AboutPage from "./components/about/AboutPage";
import HomePage from "./components/home/HomePage";

export default (
  <Route path="/" comonent={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
