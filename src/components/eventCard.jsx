import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SendIcon from '@material-ui/icons/Send';
import DirectionsIcon from '@material-ui/icons/Directions';
import Chip from '@material-ui/core/Chip';


class EventsCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, title, description, image, date, reference, venue, club } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          action={
            <Chip label={date} className={classes.chip} style={{backgroundColor: 'black', color: 'white', fontWeight: '600', width: 60, fontSize: 13, marginTop: 10, marginRight: 10}} />
          }
          title={<Typography style={{fontSize: 18, fontWeight: '400'}}>
          {title}
         </Typography>}
          subheader={<Typography style={{fontSize: 12}}>
            {club}
           </Typography>}
          
        />
        <CardMedia
          className={classes.media}
          image={image}
          title={title}
        />
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Venue">
            <DirectionsIcon style={{color: 'black'}}/>
            {venue}
          </IconButton>

          <IconButton aria-label="View" style={{marginLeft: 40}}>
            <VisibilityIcon style={{color: 'black'}}/>
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <SendIcon style={{color: 'black'}}/>
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Description:</Typography>
            <Typography paragraph>
             {description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

const styles = theme => ({
    card: {
      maxWidth: 300,
      borderRadius:10,
      borderWidth: 1, 
      overflow: 'hidden'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
      height: 150,
      width: 300,


    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
      marginLeft: 'auto',
      [theme.breakpoints.up('sm')]: {
        marginRight: -8,
      },
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  });

EventsCard.propTypes = {
  classes: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  club: PropTypes.string.isRequired,

};

export default withStyles(styles)(EventsCard);