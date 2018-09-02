import React, { Component } from "react";
import Header from "./Header.js";
import Home from "./Home.js";
import RouteError from "./RouteError.js";
import Barbell from "./Barbell.js";
import axios from "axios";
import apiKey from "./config.js";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  willIbeOnTime = () => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/directions/json?origin=30+Bangor+Street+Warwick+RI&destination=859+North+Main+Street+Providence+RI&key=${apiKey}`
      )
      .then(response => {
        console.log(response.routes.duration.text);
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
