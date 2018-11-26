import { Route, Link, Switch, withRouter } from "react-router-dom";
import React, { Component } from "react";
import News from "../screens/news";
import Events from "../screens/events";
import "../css/navlinks.css";
import Logo from "../css/gttrans.png";
import { Transition, TransitionGroup } from "react-transition-group";

class GTRouter extends Component {
  render() {
    return (
      <div className="events-news-container">
        <div className="events-news">
            <div className="gt-logo">
                <img src={Logo} alt=""/>
            </div>
          <Link to="/events" className="events-link">
            <i className="fa fa-calendar" id="events">
              {" "}
              <span>Events</span>{" "}
            </i>
          </Link>
          <Link to="/news" className="news-link">
            <i className="fa fa-newspaper-o" id="news">
              {" "}
              <span>News</span>{" "}
            </i>
          </Link>
        </div>
        <Switch>
          <Route exact path="/events" component={Events} />
          <Route exact path="/news" component={News} />
        </Switch>
      </div>
    );
  }
}

export default GTRouter;
