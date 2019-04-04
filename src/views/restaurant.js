import React, { Component } from 'react';
import NavBar from "../components/navBar";
import Map from "../components/map";
import '../App.css';

class Restaurant extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (      
      <div>
        <NavBar />
        <div className="banner">
          <img
            className="d-block w-100"
            src={this.props.data.url1}
            alt="First slide"
          />
          <img
            className="d-block w-100"
            src={this.props.data.url2}
            alt="Third slide"
          />
          <img
            className="d-block w-100"
            src={this.props.data.url3}
            alt="Third slide"
          />
          <i className="far fa-heart"></i>
        </div>
        <div className="underBanner">
          <div>
            <h1>{this.props.location.state.name}</h1>
            <p>{this.props.location.state.category}</p>
            <p>{this.props.location.state.direction}</p>
            <h2>Desciption</h2>
            <p>{this.props.location.state.description}</p>
          </div>
          <div className="mapRestaurant">
            <Map />
          </div>
        </div>
      </div>
      
    );
  }
}

export default Restaurant;