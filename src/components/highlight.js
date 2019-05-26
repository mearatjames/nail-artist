import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: '#fcf5f5',
  },
}));

function Highlight() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  function handleListItemClick(event, index) {
    setSelectedIndex(index);
  }

  return (
    <Grid container spacing={1} className={classes.root}>
        <Grid item xs={6}>
            <Paper>
                <img src='../images/coffee.png' width='300px'></img>
            </Paper>
        </Grid>
        <Grid item xs={6}>
            <List component="nav">
                <ListItem
                button
                selected={selectedIndex === 0}
                onClick={event => handleListItemClick(event, 0)}
                >
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem
                button
                selected={selectedIndex === 1}
                onClick={event => handleListItemClick(event, 1)}
                >
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
                </ListItem>
            </List>
        </Grid>
    </Grid>
  );
}

export default Highlight;
