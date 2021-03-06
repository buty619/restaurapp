import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import NavBar from "../components/navBar";
import {Redirect} from "react-router";
import axios from "axios";
import '../App.css';

class Restaurant extends Component {
  constructor(){
    super()
    this.state = {
      redirect : false,
      file : []
    }
  } 
  render() {
    return (      
      <div>
        {this.state.redirect ? <Redirect to="/" />:null}
        <NavBar />
        <div className="formContainer">
          <h1><b>Add Restaurant</b></h1>
          <Form>
            <div className="inputText">
              <h3>Restaurant Name:</h3>
              <Form.Control id="name" type="text" placeholder="Name" />
            </div>
            <div className="inputText">
              <h3>Restaurant Category:</h3>
              <Form.Control id="category" type="text" placeholder="Category" />
            </div>
            <div className="inputText">
              <h3>Restaurant Direction:</h3>
              <Form.Control id="direction" type="text" placeholder="Direction" />
            </div>
            <h3>Restaurant Coordinates:</h3>
            <div className="inputText">              
              <h5>Latitude:</h5>
              <Form.Control id="Latitude" type="text" placeholder="Latitude" />
              <h5>Longitude:</h5>
              <Form.Control id="Longitude" type="text" placeholder="Longitude" />
            </div>


            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Restaurant Description</Form.Label>
              <Form.Control id="description" as="textarea" rows="3" />
            </Form.Group>

            <Form.Group controlId="">
              <Form.Label><i className="fas fa-upload"></i> UpLoad Image</Form.Label>
              <Form.Control id="file-input" onChange={this.onChange.bind(this)} type="file" name="avatar" accept="image/gif, image/png, image/jpeg" multiple/>
            </Form.Group>


            <Button variant="primary" className="cardButton"  onClick={this.create.bind(this)}>
              Submit
            </Button>
          </Form>
        </div>

      </div>     
    );
  }
  async create(e){
    const url = [];
    for (let i = 0; i < this.state.file.length; i++) {
      var formData = new FormData();
      formData.append('image',this.state.file[i]);
      let response = await axios.post("https://restaurappapi.herokuapp.com/upload",formData);
      url[i]=response.data.imageUrl;
    }
    await axios.post('https://restaurappapi.herokuapp.com/restaurants', {
      name: document.getElementById("name").value,
      category: document.getElementById("category").value,
      direction: document.getElementById("direction").value,
      description: document.getElementById("description").value,
      url1: url[0],
      url2: url[1],
      url3: url[2],
      lat: document.getElementById("Latitude").value,
      lng: document.getElementById("Longitude").value
    });    
    this.setState({
      redirect : true
    });
  }
  onChange(e) {
    this.setState({file:e.target.files});
    console.log(this.state.file);
  }
}

export default Restaurant;