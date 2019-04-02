import React, { Component } from 'react';
import {Router, Route} from "react-router";
import { createBrowserHistory } from 'history';
import Root from "./views/root.js";
import Restaurant from "./views/restaurant.js";
import Form from "./views/form.js";
import './App.css';
const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route exact path="/" component={Root} />
        <Route  path="/:id" component={Restaurant}/>
        <Route  exact path="/form" component={Form}/>
      </Router>
    );
  }
}

export default App;
