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


function Thanks() {
  const classes = useStyles();
 
  return (
    <React.Fragment>
        <SEO />
        <Layout>
            <Jumbotron contact={true} header="Thank you for the message!"/>
        </Layout>
    </React.Fragment>
  );
}

export default Thanks;
