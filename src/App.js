import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './Home';

import './App.css';
import './stars.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path ="/" component={Home}/>
      </Router>
    );
  }
}

export default App;
