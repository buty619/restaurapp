import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
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
            lat: 6.205072,
            lng: -75.580211
          }}
          style={{
            height: '800px', width: '300px'
          }}
          google={this.props.google}
          zoom={13}
          onReady={this.fetchPlaces}
        >
          {this.props.data.map((data) => {
            return <Marker title={data.name} name={data.name} position={{lat: data.lat, lng: data.lng}} />
          })}        
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyC3seesRm6IQbMQ1cxbSOMQA7Uto5zW4ng",
  v: "3"
})(MapContainer);