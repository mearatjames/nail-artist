import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Hidden from "@material-ui/core/Hidden"
import ListItemText from "@material-ui/core/ListItemText"
import ListItem from "@material-ui/core/ListItem"
import List from "@material-ui/core/List"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import Booking from "./booking"
import Button from "@material-ui/core/Button"
import { Link } from "gatsby"

const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: "rgba(0, 0, 0, 0)",
    height: "70px",
  },
  grow: {
    flexGrow: 2,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navButton: {
    marginRight: 10,
    marginLeft: 10,
    color: "#fffbfb",
  },
  link: {
    textDecoration: "none",
    color: 'white'
  },
  activeLink: {
    backgroundColor: "#ec407a38",
  },
  center: {
    textAlign: "center",
  },
}

class NavBar extends React.Component {
  state = {
    value: 0,
    top: false,
  }

  toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    this.setState(state => ({ [side]: open }))
  }

  render() {
    const { classes } = this.props

    const drawer = side => (
      <div
        className={classes.list}
        role="presentation"
        onClick={this.toggleDrawer(side, false)}
        onKeyDown={this.toggleDrawer(side, false)}
      >
        <List>
          {["Home", "Blog", "Shop", "Contact"].map((text, index) => (
            <Link
              key={index}
              style={{ textDecoration: "none" }}
              to={text == "Home" ? "/" : "/" + text.toLowerCase()}
            >
              <ListItem className={classes.center} button>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    )

    return (
      <React.Fragment>
        <AppBar position="static">
            <Toolbar>
              <Hidden mdUp>
                <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                  onClick={this.toggleDrawer("top", true)}
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
              <div className={classes.grow}>
              <Link
                  className={classes.link}
                  to="/"
                >
              <Typography variant="h6" color="inherit">
                AIAI.91
              </Typography>
              </Link>
              </div>
              <Hidden smDown>
                <Link
                  activeClassName={classes.activeLink}
                  className={classes.link}
                  to="/"
                >
                  <Button className={classes.navButton}>Home</Button>
                </Link>
                <Link
                  activeClassName={classes.activeLink}
                  className={classes.link}
                  to="/blog"
                >
                  <Button className={classes.navButton}>Blog</Button>
                </Link>
                <Link
                  activeClassName={classes.activeLink}
                  className={classes.link}
                  to="/shop"
                >
                  <Button className={classes.navButton}>Shop</Button>
                </Link>
                <Link
                  activeClassName={classes.activeLink}
                  className={classes.link}
                  to="/contact"
                >
                  <Button className={classes.navButton}>Contact</Button>
                </Link>
              </Hidden>
              <Booking />
            </Toolbar>
        </AppBar>
        <SwipeableDrawer
          anchor="top"
          open={this.state.top}
          onClose={this.toggleDrawer("top", false)}
          onOpen={this.toggleDrawer("top", true)}
        >
          {drawer("top")}
        </SwipeableDrawer>
      </React.Fragment>
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NavBar)
