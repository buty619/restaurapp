import React, { Component } from 'react';
import NavBar from "../components/navBar";
import MapContainer from "../components/mapsRes";
import axios from "axios";
import '../App.css';

class Restaurant extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataRes : {}
    }
    console.log("entro");
    this.load();
  }
  render() {
    return (      
      <div>
        <NavBar />
        <div className="banner">
          <img
            className="d-block w-100"
            src={this.state.dataRes.url1}
            alt="First slide"
          />
          <img
            className="d-block w-100"
            src={this.state.dataRes.url2}
            alt="Third slide"
          />
          <img
            className="d-block w-100"
            src={this.state.dataRes.url3}
            alt="Third slide"
          />
          <i className="far fa-heart"></i>
        </div>
        <div className="underBanner">
          <div>
            <h1>{this.state.dataRes.name}</h1>
            <p>{this.state.dataRes.category}</p>
            <p>{this.state.dataRes.direction}</p>
            <h2>Desciption</h2>
            <p>{this.state.dataRes.description}</p>
          </div>
          <div className="mapRestaurant">
            {this.state.dataRes.lng ? <MapContainer data={this.state.dataRes}/> : <h1>Loanding ...</h1>}
          </div>
        </div>
      </div>
      
    );
  }
  async load(){
    const res = await axios.get('https://restaurappapi.herokuapp.com/restaurants/'+this.props.match.params.id);
    this.setState({
      dataRes : res.data
    });
  }
}

export default Restaurant;