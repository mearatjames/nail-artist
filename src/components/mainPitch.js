import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '90%',
    margin: '0 auto'
  },
  background: {
    backgroundColor: '#fdf4f5',
    width: '100%',
    height: '400px',
  },
}));


function MainPitch(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <React.Fragment>
      <Grid className={classes.background} container>
        <Grid item sm={6}>
          <div className={classes.root}>
            <AppBar position="static">
              <Tabs value={value} onChange={handleChange}>
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
              </Tabs>
            </AppBar>
            <TabContainer>
              <img src={imgUrl[value]} />
            </TabContainer>
          </div>
        </Grid>
        <Grid item sm={6}>
          <h1>Current Work</h1>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default MainPitch;
