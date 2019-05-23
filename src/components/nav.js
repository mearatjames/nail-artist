import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Hidden from '@material-ui/core/Hidden'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Booking from './booking'
import Button from '@material-ui/core/Button'
import { Link } from 'gatsby'

const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    height: '70px'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navButton: {
    marginRight: 10,
    marginLeft: 10,
    color: '#fffbfb'
  },
  link: {
    textDecoration: 'none',
  },
  activeLink: {
    backgroundColor: '#ec407a38'
  }
}

class NavBar extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Hidden mdUp>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              AiAi91
            </Typography>
            <Hidden smDown>
              <Link activeClassName={classes.activeLink} className={classes.link} to="/" ><Button className={classes.navButton}>Home</Button></Link>
              <Link activeClassName={classes.activeLink} className={classes.link} to="/blog" ><Button className={classes.navButton}>Blog</Button></Link>
              <Link activeClassName={classes.activeLink} className={classes.link} to="/shop" ><Button className={classes.navButton}>Shop</Button></Link>
              <Link activeClassName={classes.activeLink} className={classes.link} to="/contact" ><Button className={classes.navButton}>Contact</Button></Link>
            </Hidden>
            <Booking />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
