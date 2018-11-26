import React, { Component } from "react";
import EventsCard from "../components/eventCard";
import { upComingEvents } from "../utils/api";
import { simpleGet } from "../utils/functions";
import { Col, Grid, Row } from "react-bootstrap";
import "../css/events.css";
export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all_events: []
    };
  }

  componentDidMount() {
    simpleGet(upComingEvents)
      .then(data => {
        this.setState({ all_events: data });
      })
      .catch(error => {
        console.log(error);
      });
  }



  render() {
    return (
      <Grid className="events-container">
        <div className="row events-row">
          {this.state.all_events.map((item, index) => {
            var date = new Date(Date.parse(item.start_date));
            let endDate = new Date(Date.parse(item.end_date));
            let startDate = new Date(Date.parse(item.start_date));
            return (
              <EventsCard
                key={index}
                id={index}
                image={"https://guindytimes.com/" + item.image}
                title={item.title}
                date={date.toString().slice(3, 10)}
                description={item.description}
                club={item.club}
                venue={item.venue}
                reference={item.reference}
                startDate={startDate.toDateString()}
                endDate={endDate.toDateString()}
                classname="events-card col-centered col-md-4 col-centered"
              />
            );
          })}
        </div>
      </Grid>
    );
  }
}
