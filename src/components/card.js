import React, { Component } from 'react';
import '../App.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

class CardRest extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
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
            <Link className="btn btn-primary cardButton" to={"/restaurants/"+this.props.data._id}>Reservation</Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CardRest;
