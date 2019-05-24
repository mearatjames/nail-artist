import React from 'react';
import { makeStyles } from '@material-ui/styles';
import SEO from "../../components/seo"
import Layout from "../../components/Layout"
import Jumbotron from "../../components/jumbotron"

const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh'
  },
}));


function Shop() {
  const classes = useStyles();
 
  return (
    <React.Fragment>
        <SEO />
        <Layout>
            <Jumbotron contact={true} header="Something Exciting Is Coming Soon..."/>
        </Layout>
    </React.Fragment>
  );
}

export default Shop;
