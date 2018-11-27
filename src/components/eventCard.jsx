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
import { Modal, OverlayTrigger, Button } from "react-bootstrap";
import "../css/eventscard.css";
import AddToCalendar from "react-add-to-calendar";
import moment from "moment";

let items = [{ apple: "Apple Calendar" }, { google: "Google" }];
let icon = { "calendar-plus-o": "left" };
class EventsCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  idCreation = id => {
    const modalId = "#" + id;
    return modalId;
  };

  render() {
    const {
      classes,
      id,
      title,
      description,
      image,
      date,
      reference,
      venue,
      club,
      endDate,
      startDate,
      classname
    } = this.props;

    let event = {
      title: title,
      description: "Ready to attend the event?",
      location: venue,
      startTime: moment
        .utc(startDate)
        .add({ hours: 6, minutes: 30 })
        .format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
      endTime: moment
        .utc(endDate)
        .add({ hours: 6, minutes: 30 })
        .format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
      allDay: true
    };

    return (
      <Card className={`${classes.card} ${classname}`}>
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
            data
            data-toggle="modal"
            data-target={this.idCreation(id)}
          >
            <SendIcon style={{ color: "black" }} />
          </IconButton>
        </CardActions>

        <div id={id} className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="row modal-content">
              <div className="col-md-8 modal-content-left">
                <div
                  className="modal-close-button"
                  data-dismiss="modal"
                  onClick={this.handleExpandClick}
                />
                <div className="modal-heading">
                  <h2 className="modal-heading-h2">{title}</h2>
                  <div>
                    <span>
                      {" "}
                      <strong>Club :</strong> {club}
                      <br />
                      <br />
                      <h3 className="date modal-date">
                        <span>
                          <b>From</b> : {startDate}{" "}
                        </span>
                        {"   "}
                        <span>
                          <b>To</b> : {endDate}
                        </span>
                      </h3>
                    </span>
                  </div>
                  <div className="modal-content-filler">
                    <span>
                      {description}
                      <br />
                      <br />
                      <strong>Location : </strong>
                      {venue}
                    </span>
                    <div className="modal-calendar">
                      <AddToCalendar
                        event={event}
                        buttonLabel="Add event to calendar"
                        listItems={items}
                        buttonTemplate={icon}
                      />
                    </div>
                  </div>

                  <div className="modal-button-div">
                    <button
                      className="btn modal-button"
                      data-dismiss="modal"
                      onClick={() => (window.location.href = reference)}
                    >
                      Website{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4 vcenter modal-content-right">
                <div
                  className="mobile-modal-close-button mobile-modal-close"
                  data-dismiss="modal"
                  onClick={this.handleExpandClick}
                />
                <img src={image} className="modal-imgs" />
                <div className="modal-mobile-button-div">
                  <button
                    className="btn-primary modal-button img-btn"
                    data-dismiss="modal"
                    onClick={() => (window.location.href = reference)}
                  >
                    Website{" "}
                  </button>
                    {/*<div className="modal-calendar">*/}
                        {/*<AddToCalendar*/}
                            {/*event={event}*/}
                            {/*buttonLabel="Add event to calendar"*/}
                            {/*listItems={items}*/}
                            {/*buttonTemplate={icon}*/}
                        {/*/>*/}
                    {/*</div>*/}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*<Modal show={this.state.expanded} onHide={this.handleExpandClick}>*/}
        {/*<Modal.Header closeButton>*/}
        {/*<Modal.Title>{title}</Modal.Title>*/}
        {/*</Modal.Header>*/}
        {/*<Modal.Body style={{ width: "auto" }}>*/}
        {/*<h6>{club}</h6>*/}
        {/*<p>{description}</p>*/}

        {/*<h3>Venue</h3>*/}
        {/*<p>{venue}</p>*/}

        {/*<h4>Date(s)</h4>*/}
        {/*<p>*/}
        {/*{startDate}*/}
        {/*<br />*/}
        {/*to*/}
        {/*<br />*/}
        {/*{endDate}*/}
        {/*</p>*/}
        {/*</Modal.Body>*/}
        {/*<Modal.Footer>*/}
        {/*<Button onClick={() => (window.location.href = reference)}>*/}
        {/*Website*/}
        {/*</Button>*/}
        {/*<Button onClick={this.handleExpandClick}>Close</Button>*/}
        {/*</Modal.Footer>*/}
        {/*</Modal>*/}
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
    width: null
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
  "@media (max-width: 600px)": {
    card: {
      maxWidth: 300,
      borderRadius: 10,
      borderWidth: 1,
      overflow: "hidden",
      marginBottom: 10,
      marginLeft: 20
    }
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
