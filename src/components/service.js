import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import logo from "../images/gatsby-icon.png"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    margin: "",
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  item: {
    border: "1px solid #fcf5f5",
  },
}))

function Service() {
  const classes = useStyles()

  return (
    <Container>
      <Grid container className={classes.root}>
        <Grid className={classes.item} item xs={4}>
          <Avatar alt="Remy Sharp" src={logo} className={classes.bigAvatar} />
          <Typography variant="h6" gutterBottom>
            Pedicure
          </Typography>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit.
          </Typography>
        </Grid>
        <Grid className={classes.item} item xs={4}>
          <Avatar alt="Remy Sharp" src={logo} className={classes.bigAvatar} />
          <Typography variant="h6" gutterBottom>
            Pedicure
          </Typography>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit.
          </Typography>
        </Grid>
        <Grid className={classes.item} item xs={4}>
          <Avatar alt="Remy Sharp" src={logo} className={classes.bigAvatar} />
          <Typography variant="h6" gutterBottom>
            Pedicure
          </Typography>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Service
