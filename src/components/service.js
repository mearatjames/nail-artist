import React from "react"
import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import serviceIcon from '../images/service.svg'
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: '#fcf5f5',
    minHeight: '400px',
  },
  bigAvatar: {
    margin: '10px auto',
    width: 60,
    height: 60,
  },
  item: {
    justifyContent: 'center',
    textAlign: 'center',

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

function Service(props) {
  const classes = useStyles()

  return (
      <Grid container alignContent='center' justify='center' className={classes.root}>
        <Grid item alignContent='center' xs={12}>
        <Avatar className={classes.center} alt="Service Icon" src={serviceIcon} />
        <Typography align='center' color="primary" variant="h5" gutterBottom>
          Main Services
        </Typography>
        </Grid>
        {props.services.map((item, index) => (
          <Grid key={index} className={classes.item} item xs={12} sm={4}>
            <Avatar alt={item.title} src={'./images/' + item.icon.relativePath} className={classes.bigAvatar} />
            <Typography variant="h6" gutterBottom>
              {item.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {item.description}
            </Typography>
          </Grid>      
        ))}
        <Grid alignContent='center' className={classes.button} item xs={12}>
          <Button target="blank" href='https://square.site/book/WPQDGP4CS4ZWG/nail-spa-demo-santa-maria-ca' variant="contained" color="primary">
            View Full List of Services
          </Button>
        </Grid>
      </Grid>
  )
}

export default Service
