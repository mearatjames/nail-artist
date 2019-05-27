import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Img from "gatsby-image"
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import Hidden from "@material-ui/core/Hidden"
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: "#fcf5f5",
  },
  list: {
    maxWidth: "400px",
    minWidth: "200px",
    margin: "0 auto",
  },
  listItem: {
    "&:hover": {
      color: "red",
    },
  },
  listItemSelected: {
    boxShadow: "-2px 10px 52px -16px rgba(0,0,0,0.56)",
    backgroundColor: "white !important",
    color: "#ff5957",
  },
  center: {
    margin: "0 auto",
    marginTop: 15,
  },
  select: {
    maxWidth: 300,
    margin: '15px auto',
  }
}))

function Highlight(props) {
  const classes = useStyles()
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  function handleListItemClick(event, index) {
    setSelectedIndex(index)
  }

  function handleChange(event) {
    setSelectedIndex(event.target.value)
  }

  return (
    <Container>
      <Grid
        wrap="wrap-reverse"
        direction="row"
        alignItems="center"
        container
        className={classes.root}
      >
        <Grid item xs={12} sm={6}>
          <Img
            fluid={
              props.intro.blurbs[selectedIndex].image.childImageSharp.fluid
            }
            alt={props.intro.blurbs[selectedIndex].text}
          />
        </Grid>
        <Grid item xs={12} sm={6} alignContent="center">
          <Avatar
            alt={props.intro.heading}
            src={"/images/" + props.intro.avatar.relativePath}
            className={classes.center}
          />
          <Typography align="center" color="primary" variant="h5" gutterBottom>
            {props.intro.heading}
          </Typography>
          <Hidden smUp>
            <Paper className={classes.select}>
              <Select
                value={selectedIndex}
                onChange={handleChange}
                style={{ minWidth: 200, display: 'flex' }}
              >
                {props.intro.blurbs.map((item, index) => (
                  <MenuItem key={index} value={index}>
                    {item.text}
                  </MenuItem>
                ))}
              </Select>
            </Paper>
          </Hidden>
          <Hidden xsDown>
          <List component="ul" className={classes.list}>
            {props.intro.blurbs.map((item, index) => (
              <ListItem
                className={classes.listItem}
                classes={{
                  selected: classes.listItemSelected,
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
          </Hidden>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Highlight
