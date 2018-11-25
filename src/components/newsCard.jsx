import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Radium from "radium";

const styles = theme => ({
  card: {
    display: "flex",
    width: 800,
    height: 200,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    overflow: "hidden",

  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 700,
    marginBottom: 10,
    marginTop: 10
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  },
  '@media (max-width: 600px)':{
    card: {
      display: "flex",
      flexDirection: 'column',
      alignSelf: 'center',
      width: 330,
      borderRadius: 10,
      borderWidth: 1,
      overflow: "hidden",
      marginBottom: 15,
      height: 650
    },
    cover:{
      width: 300,
      height: 300,
      marginBottom: 15
    }
  }
});

function NewsCard(props) {
  const { classes, image, title, description, date } = props;

  return (
    <React.Fragment>
      <Card className={`${classes.card} ${props.className}`}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h4" variant="h5" style={{fontSize: 17}}>
              {title}
            </Typography>
            <Typography style={{fontSize: 14}} color="textSecondary">
              {description}
            </Typography>

            <Typography color="textSecondary" style={{ fontWeight: "bold", fontSize:13 }}>
              {date}
            </Typography>
          </CardContent>
        </div>
        <CardMedia className={classes.cover} image={image} title={title} />
      </Card>
    </React.Fragment>
  );
}

NewsCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Radium(withStyles(styles, { withTheme: true })(NewsCard));
