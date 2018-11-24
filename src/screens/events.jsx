import React, {Component} from "react";
import EventsCard from "../components/eventCard";
import {upComingEvents} from "../utils/api";
import {simpleGet} from "../utils/functions";

export default class Events extends Component{

  constructor(props) {
    super(props);
    this.state={
      all_events: [],
    }
}

  componentDidMount(){
      simpleGet(upComingEvents).then((data) => {
        this.setState({all_events: data});
      }).catch((error) => {
        console.log(error);
      });
  }




    render(){
        return (
          <div>
            {this.state.all_events.map((item) => {
              var date = new Date(Date.parse(item.start_date))
              return (
                <EventsCard 
                image={"https://guindytimes.com/" + item.image} 
                title={item.title} date={date.toString().slice(3, 10)} description={item.description}  
                club={item.club} venue={item.venue} />
            )
            })}
          </div>
        )
    }
}

