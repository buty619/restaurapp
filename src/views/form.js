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
      redirect : false
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


            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Restaurant Description</Form.Label>
              <Form.Control id="description" as="textarea" rows="3" />
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
    await axios.post('https://restaurappapi.herokuapp.com/restaurants', {
      name: document.getElementById("name").value,
      category: document.getElementById("category").value,
      direction: document.getElementById("direction").value,
      description: document.getElementById("description").value,
      fav:false
    });
    this.setState({
      redirect : true
    });
  }
}

export default Restaurant;