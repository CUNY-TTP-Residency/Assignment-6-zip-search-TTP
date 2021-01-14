import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import CityInfo from './components/CityInfo'
import HomePage from './components/HomePage'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      hits: [],
    }
  };

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>HomePage</Link></li>
          </ul>

          <hr />

          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/zip/:zipcode' component={CityInfo} />
          </Switch>
        </div>
      </Router>
    )
  }
}