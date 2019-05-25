import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Fab from '@material-ui/core/Fab';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  spinner: {
    width: '100%',
    height: '100%',
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center'
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  state = {
    open: false,
    loaded: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false, loaded: false });
  };

  hideSpinner = () => {
    this.setState({loaded: true})
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Fab className={classes.button} variant="extended" color="secondary" onClick={this.handleClickOpen}>
          Book Now
        </Fab>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Booking
              </Typography>
            </Toolbar>
          </AppBar>
          <div style={{height: '100%', overflow:'scroll', WebkitOverflowScrolling:'touch'}}>
            {this.state.loaded 
              ? null 
              : <div className={classes.spinner}><CircularProgress /></div> }
            <iframe
              height='100%'
              width='100%'
              marginHeight="0"
              marginWidth="0"
              frameBorder='0'
              onLoad={this.hideSpinner}
              src='https://squareup.com/appointments/buyer/widget/a0eefdc6-1fd1-45c3-896c-4cb83b5e7550/WPQDGP4CS4ZWG'
             />
          </div>
        </Dialog>
      </div>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullScreenDialog);