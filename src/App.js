import React, { Component } from 'react';
import {Router, Route} from "react-router";
import { createBrowserHistory } from 'history';
import Root from "./views/root.js";
import Register from "./views/register";
import Login from "./views/login.js";
import Restaurant from "./views/restaurant.js";
import Form from "./views/form.js";
import './App.css';
const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route exact path="/" component={Root} />
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/restaurants/:id" component={Restaurant}/>
        <Route exact path="/form" component={Form}/>
      </Router>
    );
  }
}

export default App;
