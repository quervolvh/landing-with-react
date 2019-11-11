import React from 'react';
// import logo from './logo.svg';
import './components/Header';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

export default class App extends React.Component {

  render() {

    return (
      <Router>
          <Switch>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>

          </Switch>
      </Router>
    );
  }
}