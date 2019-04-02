import React, { Component } from 'react';
import NavBar from "../components/navBar";
import Card from "../components/card";
import Map from "../components/map";
import axios from "axios";
import '../App.css';

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
            <Map />
          </div>          
        </div>
      </div>
    );
  }
  load(){
    axios.get("https://restaurappapi.herokuapp.com/restaurants")
    .then( res => {
      this.setState({
        restaurants : res.data
      });
    })     
  }
}

export default Root;
