import React, {useState, useEffect} from "react"
import Header from "../components/header"
import Layout from "../components/Layout.js"
import SEO from "../components/seo"
import { withStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
  });

const Test = (props) => {
    const { classes } = props;
    const [ig, setIg] = useState([]);

  useEffect(() => {
    const getIg = () => {
        fetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=26412791.bbafa33.5d964afbcc134587b761f8d47059b5d7')
        .then(function(response) {
            if (!response.ok) {
            throw new Error('HTTP error, status = ' + response.status);
            }
            return response.json()
        })
        .then(function(response) {
            setIg(response.data);
        });
    }
    getIg()
  }, []);

    return (
    <Layout>
    {console.log(ig)}
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header headerTitle="Test" />
    <h1>Hi people</h1>
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {ig.map((element, index) => (
          <GridListTile key={index} cols={2}>
            <img src={element.images.standard_resolution.url} />
          </GridListTile>
        ))}
      </GridList>
      
    </div>
  </Layout>
    )
}

Test.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Test);
