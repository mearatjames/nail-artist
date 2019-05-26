import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Img from "gatsby-image"
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: "#fcf5f5",
  },
  list: {
    maxWidth: '400px',
    minWidth: '200px',
    margin: '0 auto'
  },
  listItem: {
    '&:hover': {
      color: 'red',
    },
  },
  listItemSelected: {
    boxShadow: '-2px 20px 52px -16px rgba(0,0,0,0.56)',
    backgroundColor: 'white !important',
    color: '#ff5957'
  },
  center: {
    
  }
}))

function Highlight(props) {
  const classes = useStyles()
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  function handleListItemClick(event, index) {
    setSelectedIndex(index)
  }

  return (
    <Container>
      <Grid container className={classes.root}>
        <Grid item xs={6}>
          <Img
            fluid={
              props.intro.blurbs[selectedIndex].image.childImageSharp.fluid
            }
            alt={props.intro.blurbs[selectedIndex].text}
          />
        </Grid>
        <Grid item xs={6} className={classes.center}>
          <Typography variant="h5" gutterBottom>
            {props.intro.heading}
          </Typography>
          <List component="ul" className={classes.list}>
            {props.intro.blurbs.map((item, index) => (
              <ListItem
                className={classes.listItem}
                classes={{
                  selected: classes.listItemSelected
                }}
                key={index}
                button
                selected={selectedIndex === index}
                onClick={event => handleListItemClick(event, index)}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Highlight
