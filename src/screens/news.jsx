import React, { Component } from "react";
import NewsCard from "../components/newsCard";
import { latestNews } from "../utils/api";
import { simpleGet } from "../utils/functions";
import { Grid } from "react-bootstrap";
import "../css/news.css";
export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all_news: []
    };
  }

  componentDidMount() {
    simpleGet(latestNews)
      .then(data => {
        this.setState({ all_news: data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  

  render() {
    return (
      <Grid>
        <div className="row news-row">
          <h1>Latest News :</h1>
          {this.state.all_news.map(item => {
            var date = new Date(Date.parse(item.created_at));
            return (
              <NewsCard
                key={item.id}
                image={"https://guindytimes.com/" + item.image}
                title={item.title}
                date={date.toString().slice(0, 24)}
                description={item.description}
                className="news-card col-centered col-md-6"
              />
            );
          })}
        </div>
      </Grid>
    );
  }
}
