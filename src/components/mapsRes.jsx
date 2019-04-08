import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  render() {
    if (!this.props.google) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Map
          initialCenter={{
            lat: this.props.data.lat,
            lng: this.props.data.lng
          }}
          style={{
            height: '300px', width: '300px'
          }}
          google={this.props.google}
          zoom={13}
          onReady={this.fetchPlaces}
        >
          <Marker title={this.props.data.name} name={this.props.data.name} position={{lat: this.props.data.lat, lng: this.props.data.lng}} />     
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyC3seesRm6IQbMQ1cxbSOMQA7Uto5zW4ng",
  v: "3"
})(MapContainer);