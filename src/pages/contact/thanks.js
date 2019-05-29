import React from 'react';
import SEO from "../../components/seo"
import Layout from "../../components/Layout"
import Jumbotron from "../../components/jumbotron"

function Thanks() {

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
