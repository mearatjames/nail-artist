import React from 'react';
import SEO from "../../components/seo"
import Layout from "../../components/Layout"
import Jumbotron from "../../components/jumbotron"


function Shop() {
 
  return (
    <React.Fragment>
        <SEO />
        <Layout>
            <Jumbotron shop={true} header="Something Exciting Is Coming Soon..."/>
        </Layout>
    </React.Fragment>
  );
}

export default Shop;
