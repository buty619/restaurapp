import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../App.css';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <Link to="/">
          <div>
          <i className="fas fa-utensils"></i>
          <h1>RestaurApp</h1>
          </div>
        </Link>
        <Link to="/form">
          <div id="container">
            <button className="learn-more">
              <div className="circle">
                <span className="icon arrow"></span>
              </div>
              <p className="button-text">Add Restaurant</p>
            </button>
          </div>
        </Link>
      </nav>
    );
  }
}

export default NavBar;
