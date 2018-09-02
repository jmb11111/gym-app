import React, { Component } from "react";
import Header from "./Header.js";
import Home from "./Home.js";
import RouteError from "./RouteError.js";
import Barbell from "./Barbell.js";
import axios from "axios";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  willIbeOnTime = location => {
    axios
      .get(`https://fullrange-server.herokuapp.com/trip-duration/${location}`)
      .then(response => {
        this.setState({ tripDuration: response.data.text });
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
      noResults: true,
      tripDuration: String
    };
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={`/`}
            render={() => (
              <Home
                onTime={this.willIbeOnTime}
                location={this.getLocation}
                duration={this.state.tripDuration}
              />
            )}
          />
          <Route path={`/barbell`} render={() => <Barbell />} />
          {/* <Route component={RouteError} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
