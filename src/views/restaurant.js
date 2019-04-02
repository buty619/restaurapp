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
            src="https://www.ot-cassis.com/cache/media/patio/13t1000724_8/s,800,800-d96b5b.jpg"
            alt="First slide"
          />
          <img
            className="d-block w-100"
            src="https://www.gastronomistas.com/wp-content/uploads/sala-a-restaurant-gastronomistas.com_.jpeg"
            alt="Third slide"
          />
          <img
            className="d-block w-100"
            src="https://noted-prod-cdn-ep.azureedge.net/cache/3/c/b/0/a/a/3cb0aa58330edbec1c2a7c9e6b1e485ca19b9d8c.jpg"
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