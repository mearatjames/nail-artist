import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import logo from "../images/gatsby-icon.png"
import serviceIcon from '../images/service.svg'
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: '#fcf5f5',
    minHeight: '400px',
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  item: {
    border: "1px solid #fcf5f5",
  },
  button: {
    textAlign: 'center',
    height: '80px',
    paddingTop: '20px',
  },
  center: {
    margin: '0 auto'
  }
}))

function Service() {
  const classes = useStyles()

  return (
    <Container>
      <Grid container alignContent='center' justify='center' className={classes.root}>
        <Grid item alignContent='center' xs={12}>
        <Avatar className={classes.center} alt="Service Icon" src={serviceIcon} />
        <Typography align='center' color="primary" variant="h5" gutterBottom>
          Main Services
        </Typography>
        </Grid>
        <Grid className={classes.item} item xs={12} sm={4}>
          <Avatar alt="Remy Sharp" src={logo} className={classes.bigAvatar} />
          <Typography variant="h6" gutterBottom>
            Pedicure
          </Typography>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit.
          </Typography>
        </Grid>
        <Grid className={classes.item} item xs={12} sm={4}>
          <Avatar alt="Remy Sharp" src={logo} className={classes.bigAvatar} />
          <Typography variant="h6" gutterBottom>
            Pedicure
          </Typography>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit.
          </Typography>
        </Grid>
        <Grid className={classes.item} item xs={12} sm={4}>
          <Avatar alt="Remy Sharp" src={logo} className={classes.bigAvatar} />
          <Typography variant="h6" gutterBottom>
            Pedicure
          </Typography>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit.
          </Typography>
        </Grid>
        <Grid alignContent='center' className={classes.button} item xs={12}>
          <Button target="blank" href='https://square.site/book/WPQDGP4CS4ZWG/nail-spa-demo-santa-maria-ca' variant="contained" color="primary">
            View Full List of Services
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Service
