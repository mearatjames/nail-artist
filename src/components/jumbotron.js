import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from '@material-ui/core/Typography'
import BlogCover from '../images/jumbotron.jpg'
import Grid from '@material-ui/core/Grid'

const styles = {
  header: {
    height: '85vh',
    backgroundImage: `url(${BlogCover})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: '-70px'
  },
  headerText: {
    minWidth: '80vh',
    minHeight: '100px',
    textAlign: 'center',
    display: 'grid',
    alignItems: 'center',
  },
  contact: {
    height: '101vh',
    backgroundImage: `url(${BlogCover})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: '-70px'
  },
  landingPage: {
    height: '85vh',
    backgroundImage: `url(${BlogCover})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: '-70px'
  }
}

class Jumbotron extends Component {
  render() {
    const { classes } = this.props
    return (
        <Grid container 
          justify="center"
          alignItems="center"
          className={this.props.landingPage? classes.landingPage: this.props.contact ? classes.contact : classes.header}>
          <div className={classes.headerText}>
            <Typography variant="h2">
              AiAi.91
            </Typography>
            <Typography variant="h6">
                {this.props.header}
            </Typography>
          </div>
        </Grid>
    )
  }
}

export default withStyles(styles)(Jumbotron)