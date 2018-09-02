import React, { Component } from "react";
import Home from "./Home.js";
import Barbell from "./Barbell.js";
import axios from "axios";
import countdown from "countdown";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
let afternoonClass = n => {
  var d = new Date();
  d.setHours(n + 12);
  d.setMinutes(30);
  d.setSeconds(0);
  return d;
};
let morningClass = n => {
  var d = new Date();
  d.setHours(n);
  d.setMinutes(0);
  d.setSeconds(0);
  return d;
};
class App extends Component {
  countdownToClass = now => {
    this.setState({
      Five30ClassIs: Math.round(
        countdown(now, afternoonClass(5), countdown.MINUTES).value / 1000 / 60
      ),
      Four30ClassIs: Math.round(
        countdown(now, afternoonClass(4), countdown.MINUTES).value / 1000 / 60
      ),
      Six30ClassIs: Math.round(
        countdown(now, afternoonClass(6), countdown.MINUTES).value / 1000 / 60
      ),
      SixAMClass: Math.round(
        countdown(now, morningClass(6), countdown.MINUTES).value / 1000 / 60
      ),
      SevenAMClass: Math.round(
        countdown(now, morningClass(7), countdown.MINUTES).value / 1000 / 60
      ),
      NineAMClass: Math.round(
        countdown(now, morningClass(9), countdown.MINUTES).value / 1000 / 60
      )
    });
  };

  willIbeOnTime = location => {
    axios
      .get(`https://fullrange-server.herokuapp.com/trip-duration/${location}`)
      .then(response => {
        this.setState({ tripDuration: Math.round(response.data.value / 60) });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };

  constructor() {
    super();
    this.state = {};
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
                nextClass={this.countdownToClass}
                Five30ClassIs={this.state.Five30ClassIs}
                Six30ClassIs={this.state.Six30ClassIs}
                Four30ClassIs={this.state.Four30ClassIs}
                SixAMClassIs={this.state.SixAMClassIs}
                SevenAMClassIs={this.state.SevenAMClassIs}
                NineAMClassIs={this.state.NineAMClassIs}
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
