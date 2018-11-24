import React, {Component} from "react";
import NewsCard from "../components/newsCard"
import {latestNews} from "../utils/api";
import {simpleGet} from "../utils/functions";
import {Col, Grid, Row} from "react-bootstrap";
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

            <Grid>
                <Row className="show-grid">
                    <Col xs={6} md={4} mdPush={2}>
                    <div className="row">
                        <div className="col-lg-1 col-centered">
                        {this.state.all_news.map((item) => {
                        var date = new Date(Date.parse(item.created_at))
                        return (
                        <NewsCard 
                        key={item.id}
                        image={"https://guindytimes.com/" + item.image} 
                        title={item.title} date={date.toString().slice(0, 24)} description={item.description}  
                        />)
                            })}
                        </div>
                    </div>
                    </Col>
                </Row>
            </Grid>
            
          );
    }
}
