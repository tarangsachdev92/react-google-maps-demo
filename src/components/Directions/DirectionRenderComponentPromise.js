import React, { Component } from "react";
import heartIcon from "../images/heart-icon.png";
import { convertLatLngToObj } from "../utility/helper";
const { Marker, DirectionsRenderer } = require("react-google-maps");

class DirectionRenderComponentAsync extends Component {
  state = {
    directions: null,
    wayPoints: null,
    currentLocation: null
  };
  delayFactor = 0;

  getDirectionsPromise = (startLoc, destinationLoc, wayPoints) =>
    this.getDirections(startLoc, destinationLoc, wayPoints).then(response => {
      if (response.status === window.google.maps.DirectionsStatus.OK) {
        const wayPts = response.result.routes[0].overview_path.filter(
          (elem, index) => {
            return index % 10 === 0;
          }
        );
        this.setState({
          directions: response.result,
          wayPoints: wayPts
        });
        this.setCurrentLocation(wayPts);
      } else if (
        response.status === window.google.maps.DirectionsStatus.OVER_QUERY_LIMIT
      ) {
        this.delayFactor += 0.2;
        if (this.delayFactor === 15) {
          this.delayFactor = 0.2;
        }
        setTimeout(() => {
          this.getDirectionsPromise(
            startLoc,
            destinationLoc,
            response.wayPoints
          );
        }, this.delayFactor * 200);
      } else {
        console.error(`error fetching directions ${response.result}`);
      }
    });

  componentDidMount() {
    const startLoc = `${this.props.from.lat}, ${this.props.from.lng}`;
    const destinationLoc = `${this.props.to.lat}, ${this.props.to.lng}`;
    this.getDirectionsPromise(startLoc, destinationLoc, []);
  }

  async getDirections(startLoc, destinationLoc, wayPoints = []) {
    return new Promise((resolve, reject) => {
      const waypts = [];
      if (wayPoints.length > 0) {
        waypts.push({
          location: new window.google.maps.LatLng(
            wayPoints[0].lat,
            wayPoints[0].lng
          ),
          stopover: true
        });
      }
      const DirectionsService = new window.google.maps.DirectionsService();
      DirectionsService.route(
        {
          origin: startLoc,
          destination: destinationLoc,
          waypoints: waypts,
          optimizeWaypoints: true,
          travelMode: window.google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          resolve({ status, result, wayPoints });
        }
      );
    });
  }

  setCurrentLocation = wayPoints => {
    let count = 0;
    let refreshIntervalId = setInterval(() => {
      // console.log("wayPoints:", wayPoints);
      if (wayPoints) {
        if (count <= wayPoints.length - 1) {
          const currentLocation = convertLatLngToObj(
            wayPoints[count].lat(),
            wayPoints[count].lng()
          );
          this.setState({ currentLocation });
          const wayPts = [];
          wayPts.push(currentLocation);
          const startLoc = this.props.from.lat + ", " + this.props.from.lng;
          const destinationLoc = this.props.to.lat + ", " + this.props.to.lng;
          this.delayFactor = 0;
          this.getDirectionsPromise(startLoc, destinationLoc, wayPts);
          count++;
        } else {
          clearInterval(refreshIntervalId);
        }
      }
    }, 1000);
  };
  render() {
    let originMarker = null;
    let destinationMarker = null;
    if (this.state.directions && this.props.index) {
      originMarker = (
        <Marker
          defaultLabel={this.props.index.toString()}
          defaultIcon={null}
          position={{
            lat: parseFloat(this.props.from.lat),
            lng: parseFloat(this.props.from.lng)
          }}
        />
      );
      destinationMarker = (
        <Marker
          label={this.props.index.toString()}
          defaultIcon={null}
          position={{
            lat: parseFloat(this.props.to.lat),
            lng: parseFloat(this.props.to.lng)
          }}
        />
      );
    }
    return (
      <div>
        {originMarker}
        {destinationMarker}
        {this.state.currentLocation && (
          <Marker
            defaultIcon={heartIcon}
            position={{
              lat: this.state.currentLocation.lat,
              lng: this.state.currentLocation.lng
            }}
          />
        )}
        {this.state.directions && (
          <DirectionsRenderer
            directions={this.state.directions}
            options={{
              polylineOptions: {
                storkeColor: this.props.storkeColor,
                strokeOpacity: 0.4,
                strokeWeight: 4
              },
              preserveViewport: true,
              suppressMarkers: true,
              icon: { scale: 3 }
            }}
          />
        )}
      </div>
    );
  }
}

export default DirectionRenderComponentAsync;
