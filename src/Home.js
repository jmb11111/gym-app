import React, { Component } from "react";
import Header from "./Header.js";
import countdown from "countdown";
let location;
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      return (location =
        position.coords.latitude.toString() +
        "," +
        position.coords.longitude.toString());
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}
// let fiveThirtyClass = () => {
//   var d = new Date();
//   d.setHours(17);
//   d.setMinutes(30);
//   d.setSeconds(0);
//   return d;
// };
// let countdownToFiveThirty = countdown(
//   null,
//   fiveThirtyClass(),
//   countdown.MINUTES
// );

class Home extends Component {
  //gets location as soon as component loads
  componentDidMount() {
    getLocation();
  }
  //stops page from refreshing on submit, runs onTime with current location parameters
  handleSubmit = e => {
    e.preventDefault();
    this.props.nextClass(null);
    this.props.onTime(location);
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container card-columns ml-auto mr-auto mt-5 row d-flex justify-content-between">
          <div className="card col-lg-3   text-center">
            {/* <img
              className="card-img-top img-fluid mt-2"
              src="trafficLight.jpg"
              height="285"
              width="285"
              alt="Card  cap"
            /> */}
            <div className="card-body">
              <h5 className="card-title">Will I Make It?</h5>
              <form className="mb-3" onSubmit={this.handleSubmit}>
                <button type="submit" className="btn btn-primary">
                  Get ETA
                </button>
              </form>
              {this.props.duration ? (
                <ul className="list-group list-group-flush ">
                  <li className="list-group-item active">
                    ETA: {this.props.duration}
                  </li>
                  {this.props.SixAMClassIs > this.props.duration ? (
                    <li className="list-group-item list-group-item-success ">
                      6AM
                    </li>
                  ) : (
                    <li className="list-group-item list-group-item-danger">
                      6AM
                    </li>
                  )}
                  {this.props.SevenAMClassIs > this.props.duration ? (
                    <li className="list-group-item list-group-item-success ">
                      7AM
                    </li>
                  ) : (
                    <li className="list-group-item list-group-item-danger">
                      7AM
                    </li>
                  )}
                  {this.props.NineAMClassIs > this.props.duration ? (
                    <li className="list-group-item list-group-item-success ">
                      9AM
                    </li>
                  ) : (
                    <li className="list-group-item list-group-item-danger">
                      9AM
                    </li>
                  )}
                  {this.props.Four30ClassIs > this.props.duration ? (
                    <li className="list-group-item list-group-item-success ">
                      430
                    </li>
                  ) : (
                    <li className="list-group-item list-group-item-danger">
                      430
                    </li>
                  )}
                  {this.props.Five30ClassIs > this.props.duration ? (
                    <li className="list-group-item list-group-item-success ">
                      530
                    </li>
                  ) : (
                    <li className="list-group-item list-group-item-danger">
                      530
                    </li>
                  )}
                  {this.props.Six30ClassIs > this.props.duration ? (
                    <li className="list-group-item list-group-item-success ">
                      630
                    </li>
                  ) : (
                    <li className="list-group-item list-group-item-danger">
                      630
                    </li>
                  )}
                </ul>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="card  col-lg-4  text-center">
            <img
              className="card-img-top img-fluid mt-2"
              src="/samplePerson.jpg"
              alt="Card  cap"
            />
            <div className="card-body">
              <h5 className="card-title">3 Time Per Week Streek</h5>
              <p className="card-text">
                Naomi has been coming 3 times per week for 18 weeks!
              </p>
              <a href="dosomthing" className="btn btn-primary">
                That's awesome!
              </a>
            </div>
          </div>

          <div className="card col-lg-3 bg-dark text-center">
            <div className="card-header bg-dark text-white">Recent PR's</div>
            <ul className="list-group list-group-flush ">
              <li className="list-group-item">Kayla Zerva - Snatch</li>
              <li className="list-group-item">Adam Molano - Squat</li>
              <li className="list-group-item">Erica Larence - 500M Row</li>
              <li className="list-group-item">Arron Wheeler - Push Press</li>
              <li className="list-group-item">Sara Kemper - Fran</li>
              <li className="list-group-item">Chelsea Boyd - Deadlift</li>
              <li className="list-group-item">Al Moniz - Snatch</li>
              <li className="list-group-item">Kate Schultz - RDL * 4</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
