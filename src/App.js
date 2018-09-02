import React, { Component } from "react";
import Header from "./Header.js";
import Home from "./Home.js";
import RouteError from "./RouteError.js";
import Barbell from "./Barbell.js";
import axios from "axios";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
class App extends Component {
  willIbeOnTime = () => {
    axios
      .get(`https://fullrange-server.herokuapp.com/trip-duration`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };

  constructor() {
    super();
    this.state = {
      pics: [],
      loading: true,
      noResults: true
    };
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={`/`}
            render={() => <Home onTime={this.willIbeOnTime} />}
          />
          <Route path={`/barbell`} render={() => <Barbell />} />
          {/* <Route component={RouteError} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
