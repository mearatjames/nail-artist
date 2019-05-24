import React from 'react';
import { makeStyles } from '@material-ui/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import SEO from "../../components/seo"
import Layout from "../../components/Layout"
import Jumbotron from "../../components/jumbotron"
import Paper from "@material-ui/core/Paper"
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { navigate } from 'gatsby-link'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'block',
  },
  menu: {
    width: 200,
  },
}));


function Thanks() {
  const classes = useStyles();
 
  return (
    <React.Fragment>
        <SEO />
        <Layout>
            <Jumbotron header="Thank you for the message"/>
        </Layout>
    </React.Fragment>
  );
}

export default Thanks;
