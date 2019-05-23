import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  igButton: {
    position: 'fixed',
    right: 15,
    bottom: 20,
    zIndex: 1000
  }
});

function FloatingActionButtons(props) {
  const { classes } = props;
  return (
    <div className={classes.igButton}>
      <Fab href="https://www.instagram.com/aiai.91/" color="secondary" aria-label="Add" className={classes.fab}>
        <i className="fab fa-instagram fa-2x"></i>
      </Fab>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);
