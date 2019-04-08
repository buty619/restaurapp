import React, { Component } from 'react';
import NavBar from "../components/navBar";
import Card from "../components/card";
import axios from "axios";
import '../App.css';
import MapContainer from "../components/maps";

class Root extends Component {
  constructor(){
    super()
    this.state = {
      restaurants : []
    }
    this.load();
  }
  render() {
    return (
      <div>      
        <NavBar />
        <div className="grid">          
          {this.state.restaurants.map((data) => {
            return <Card data={data}/>
          })}   
          <div className="map">
            <MapContainer data={this.state.restaurants}/>
          </div>          
        </div>
      </div>
    );
  }
  async load(){
    const res = await axios.get('https://restaurappapi.herokuapp.com/restaurants');
    this.setState({
      restaurants : res.data
    });     
  }
}

export default Root;
