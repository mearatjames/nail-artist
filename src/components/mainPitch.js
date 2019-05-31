import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  about: {
    textAlign: 'center',
    margin: '40px auto'
  }
}));


function MainPitch(props) {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <div className={classes.about}>
      <Typography align="center" color="primary" variant="h3" gutterBottom>
        {props.mainpitch.title}
      </Typography>
      <Typography align="center" color="textSecondary" variant="h6" gutterBottom>
        {props.mainpitch.subtitle}
      </Typography>
      <Typography align="center" color="textSecondary" variant="body1" gutterBottom>
        {props.mainpitch.description}
      </Typography>
      </div>
    </React.Fragment>
  );
}

export default MainPitch;
