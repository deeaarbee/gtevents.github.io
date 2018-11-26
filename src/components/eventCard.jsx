import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import VisibilityIcon from "@material-ui/icons/Visibility";
import SendIcon from "@material-ui/icons/Send";
import DirectionsIcon from "@material-ui/icons/Directions";
import Chip from "@material-ui/core/Chip";
import Radium from "radium";
import {Modal, OverlayTrigger, Button} from "react-bootstrap";

class EventsCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const {
      classes,
      title,
      description,
      image,
      date,
      reference,
      venue,
      club,
      endDate,
      startDate,
    } = this.props;

    return (
      <Card className={`${classes.card} ${this.props.className}`}>
        <CardHeader
          action={
            <Chip
              label={date}
              className={classes.chip}
              style={{
                backgroundColor: "black",
                color: "white",
                fontWeight: "600",
                width: 60,
                fontSize: 13,
                marginTop: 10,
                marginRight: 10
              }}
            />
          }
          title={
            <Typography style={{ fontSize: 18, fontWeight: "400" }}>
              {title}
            </Typography>
          }
          subheader={<Typography style={{ fontSize: 12 }}>{club}</Typography>}
        />
        <CardMedia className={classes.media} image={image} title={title} />
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Venue">
            <DirectionsIcon style={{ color: "black" }} />
            {venue}
          </IconButton>

          <IconButton aria-label="View" style={{ marginLeft: 40 }}>
            {/* <VisibilityIcon style={{ color: "black" }} /> */}
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <SendIcon style={{ color: "black" }} />
          </IconButton>
        </CardActions>
        

        <Modal show={this.state.expanded} onHide={this.handleExpandClick}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{width: 'auto'}}>
            <h6>{club}</h6>
            <p>
              {description}
            </p>

               <h3>Venue</h3>
            <p>
              {venue}
            </p>

             <h4>Date(s)</h4>
            <p>

              {startDate}
              <br/>
              to
              <br/>
              {endDate}
              
            </p>
           
          
          </Modal.Body>
          <Modal.Footer>
          <Button onClick={() => window.location.href=reference}>Website</Button>
            <Button onClick={this.handleExpandClick}>Close</Button>
          </Modal.Footer>
        </Modal>




      </Card>
    );
  }
}

const styles = theme => ({
  card: {
    maxWidth: 300,
    borderRadius: 10,
    borderWidth: 1,
    overflow: "hidden"
  },
  media: {
    paddingTop: "56.25%", // 16:9
    height: 150,
    width: null,

  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  '@media (max-width: 600px)':{
    card: {
      maxWidth: 300,
      borderRadius: 10,
      borderWidth: 1,
      overflow: "hidden",
      marginBottom: 10,
      marginLeft: 20,
    },
  }
});

EventsCard.propTypes = {
  classes: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  club: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired
};

export default Radium(withStyles(styles)(EventsCard));
