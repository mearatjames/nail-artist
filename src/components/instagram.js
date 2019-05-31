import React from "react"
import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import IgAvatar from "../images/instagram.svg"
import Carousel from './carousel'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "980px",
    margin: '0 auto',
    minHeight: '400px',
  },
  center: {
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center',
  },
  inLine: {
    textAlign: 'center',
    margin: '5px auto',
  },
  background: {
    backgroundColor: '#fcf5f5'
  }
}))

function Instagram(props) {
  const classes = useStyles()

  return (
      <Grid
        alignItems="center"
        justify="center"
        container
        className={classes.root}
      >
        <Grid item sm={6}>
          <div style={{ margin: "0 auto" }}>
            <Avatar
              className={classes.inLine}
              alt="Remy Sharp"
              src={IgAvatar}
            />
            <Typography className={classes.inLine} color="primary" variant="h5" gutterBottom>Latest Instagram Feeds</Typography>
            <Typography className={classes.inLine} color="textSecondary" variant="subtitle1">
              Curious about what I have been up to?
            </Typography>
            <Typography className={classes.inLine} color='textSecondary' variant="subtitle2">
              Follow me on Instagram
            </Typography>
            <div className={classes.inLine}>
              <a
                style={{ textDecoration: "none", color: "black" }}
                target="blank"
                href="https://www.instagram.com/aiai.91/"
              >
                <Typography variant="h6">
                  @aiai.91
                  <span>
                    <i className="fab fa-instagram fa-lg" />
                  </span>
                </Typography>
              </a>
            </div>
          </div>
        </Grid>
        <Grid item sm={6}>
          {/* <Carousel /> */}
        </Grid>
      </Grid>
  )
}

export default Instagram
