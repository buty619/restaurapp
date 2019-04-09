import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import NavBar from "../components/navBar";
import axios from "axios";
import '../App.css';

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
              <h3><i className="fas fa-at"></i> email:</h3>
              <Form.Control id="email" type="text" placeholder="e-mail" />
            </div>
            <div className="inputText">
              <h3><i className="fas fa-user-circle"></i> nickName:</h3>
              <Form.Control id="nickname" type="text" placeholder="nickName" />
            </div>
            <div className="inputText">
              <h3><i className="fas fa-key"></i> password:</h3>
              <Form.Control id="password" type="password" placeholder="Password" />
              <i onClick={this.eye.bind(this)} className="fas fa-eye"></i>
            </div>
            <Button variant="primary" className="cardButton"  onClick={this.create.bind(this)}>
              Register
            </Button>
            <Button variant="primary" className="cardButton"  onClick={this.google.bind(this)}>
              Register whit Google
            </Button>
            <Link id="login" to="/">Cancel</Link>
          </Form>
        </div>

      </div>     
    );
  }
  async create(e){
    await axios.post('https://restaurappapi.herokuapp.com/register', {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      nickname: document.getElementById("nickname").value,
    });    
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
  async google(e){
    await axios.get("https://restaurappapi.herokuapp.com/oauth");
    this.setState({
      redirect : true
    });
  }
}

export default Restaurant;