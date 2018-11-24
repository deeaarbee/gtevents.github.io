import React, {Component} from "react";
import NewsCard from "../components/newsCard"
import {latestNews} from "../utils/api";
import {simpleGet} from "../utils/functions";
export default class News extends Component{
    
    constructor(props) {
        super(props);
        this.state={
          all_news: [],
        }
    }

      componentDidMount(){
        simpleGet(latestNews).then((data) => {
          this.setState({all_news: data});
        }).catch((error) => {
          console.log(error);
        });
    }
  

    render(){
        return (
            <div>
              {this.state.all_news.map((item) => {
                var date = new Date(Date.parse(item.created_at))
                return (
                  <NewsCard 
                  image={"https://guindytimes.com/" + item.image} 
                  title={item.title} date={date.toString().slice(0, 24)} description={item.description}  
                />
              )
              })}
            </div>
          )
    }
}
