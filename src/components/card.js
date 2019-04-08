import React, { Component } from 'react';
import '../App.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import {Redirect} from "react-router";
import axios from "axios";

class CardRest extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirect : false,
      dataRes : {}
    }
    this.id="";
  }
  render() {
    return (
      <div>
        {this.state.redirect ? <Redirect to={{pathname: `/restaurants/${this.id}`, state:this.id}} />:null}
        <Card className="cardContainer">
          <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={this.props.data.url1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{this.props.data.name}</h3>
                  <p>{this.props.data.category}</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={this.props.data.url2}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>{this.props.data.name}</h3>
                  <p>{this.props.data.category}</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={this.props.data.url3}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>{this.props.data.name}</h3>
                  <p>{this.props.data.category}</p>
                </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
          <Card.Body>
            <Card.Title>{this.props.data.name}</Card.Title>
            <Card.Text>{this.props.data.category}</Card.Text>
            <Card.Text>{this.props.data.direction}</Card.Text>
            <Button id={this.props.data._id} variant="primary" className="cardButton" onClick={this.gotoRes.bind(this)}>Reservation</Button>
          </Card.Body>
        </Card>
      </div>

    );
  }
  async gotoRes(e){
    this.id = e.target.id;
    const res = await axios.get('https://restaurappapi.herokuapp.com/restaurants/'+this.id);
    this.setState({
      redirect : true,
      dataRes : res.data
    });
  }
}

export default CardRest;
