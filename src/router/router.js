import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from 'react'
import News from '../screens/news';
import Events from '../screens/events';

export default class GTRouter extends Component {
    render() {
      return (
        <Router>
        <div>
        <nav>
            <ul>
            <li>
                <Link to="/events">Events</Link>
            </li>
            <li>
                <Link to="/news">News</Link>
            </li>
            </ul>
        </nav>
      <Route path="/events" component={Events} />
      <Route path="/news" component={News} />
    </div>
  </Router>
      )
    }
  }