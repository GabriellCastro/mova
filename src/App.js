import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/details" component={ Details } />
        </Switch>
      </Router>
    );
  }
}

export default App;
