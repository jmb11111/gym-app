import React, { Component } from "react";
import Header from "./Header.js";
let location;
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(
        "Latitude: " +
          position.coords.latitude +
          "<Longitude: " +
          position.coords.longitude
      );
      return (location =
        position.coords.latitude.toString() +
        "," +
        position.coords.longitude.toString());
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

class Home extends Component {
  componentDidMount() {
    getLocation();
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.onTime(location);
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container card-columns ml-auto mr-auto mt-5 row d-flex justify-content-between">
          <div className="card col-lg-3   text-center">
            <img
              className="card-img-top img-fluid mt-2"
              src="trafficLight.jpg"
              height="285"
              width="285"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Will I Make It?</h5>
              <p className="card-text">ETA: {this.props.duration}</p>
              <form className="" onSubmit={this.handleSubmit}>
                <button type="submit" className="search-button">
                  Get ETA
                </button>
              </form>
            </div>
          </div>
          <div className="card  col-lg-4  text-center">
            <img
              className="card-img-top img-fluid mt-2"
              src="/samplePerson.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">3 Time Per Week Streek</h5>
              <p className="card-text">
                Naomi has been coming 3 times per week for 18 weeks!
              </p>
              <a href="#" className="btn btn-primary">
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
