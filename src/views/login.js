import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import NavBar from "../components/navBar";
import axios from "axios";
import '../App.css';
axios.defaults.withCredentials = true;

class Restaurant extends Component {
  constructor(){
    super()
    this.state = {
      redirect : false,
    }
  } 
  render() {
    return (      
      <div>
        {this.state.redirect ? <Redirect to="/" />:null}
        <NavBar />
        <div className="formContainer">
          <h1><b>Register</b></h1>
          <Form>
            <div className="inputText">
              <h3><i className="fas fa-at"></i> / <i className="fas fa-user-circle"></i></h3>
              <Form.Control id="auth" type="text" placeholder="Ingrese e-mail o NickName" />
            </div>
            <div className="inputText">
              <h3><i className="fas fa-key"></i> password:</h3>
              <Form.Control id="password" type="password" placeholder="Password" />
              <i onClick={this.eye.bind(this)} className="fas fa-eye"></i>
            </div>
            <Button variant="primary" className="cardButton"  onClick={this.create.bind(this)}>
              Log In
            </Button>
            <Link id="login" to="/">Cancel</Link>
          </Form>
        </div>
      </div>     
    );
  }
  async create(e){
    const response = await axios.post('https://restaurappapi.herokuapp.com/logIn',
      {
      auth: document.getElementById("auth").value,
      password: document.getElementById("password").value,
    },{withCredentials: true});
    this.setState({
      redirect : true
    });
  }
  eye(e){
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
}

export default Restaurant;