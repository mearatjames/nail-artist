import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from '@material-ui/core/Typography'
import BlogCover from '../images/jumbotron.jpg'
import Grid from '@material-ui/core/Grid'

const styles = {
  header: {
    height: '600px',
    backgroundImage: `url(${BlogCover})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: '-70px'
  },
  headerText: {
    minWidth: '300px',
    minHeight: '100px',
    textAlign: 'center',
    display: 'grid',
    alignItems: 'center',
  },
  contact: {
    height: '100vh',
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
          className={this.props.contact ? classes.contact : classes.header}>
          <div className={classes.headerText}>
            <Typography variant="h2">
              AiAi91
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