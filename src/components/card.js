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
        {this.state.redirect ? <Redirect to={{pathname: `/restaurants/${this.id}`, state:this.state.dataRes}} />:null}
        <Card className="cardContainer">
          <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.ot-cassis.com/cache/media/patio/13t1000724_8/s,800,800-d96b5b.jpg"
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
                  src="https://www.gastronomistas.com/wp-content/uploads/sala-a-restaurant-gastronomistas.com_.jpeg"
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
                  src="https://noted-prod-cdn-ep.azureedge.net/cache/3/c/b/0/a/a/3cb0aa58330edbec1c2a7c9e6b1e485ca19b9d8c.jpg"
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
