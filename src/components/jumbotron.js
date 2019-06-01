import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from '@material-ui/core/Typography'
import BlogCover from '../images/jumbotron.jpg'
import Grid from '@material-ui/core/Grid'

const styles = {
  landingPage: {
    height: '85vh',
    backgroundImage: `url(${BlogCover})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: '-70px',
    overflow: 'hidden'
  },
  shop: {
    height: '102vh',
    backgroundImage: `url(${BlogCover})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: '-70px',
    overflow: 'hidden'
  },

}

class Jumbotron extends Component {
  render() {
    const { classes } = this.props
    return (
        <Grid container 
          justify="center"
          alignItems="center"
          className={this.props.shop ? classes.shop : classes.landingPage}>
          <div className={classes.headerText}>
            <Typography align='center' variant="h2">
              AiAi.91
            </Typography>
            <Typography align='center' variant="h6">
                {this.props.header}
            </Typography>
          </div>
        </Grid>
    )
  }
}

export default withStyles(styles)(Jumbotron)