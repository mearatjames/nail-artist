import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { withStyles } from "@material-ui/core/styles"
import SEO from '../components/seo'
import Layout from '../components/Layout'
import Fab from '../components/fab'
import Jumbotron from '../components/jumbotron'
import Instagram from '../components/instagram'
import GoogleMap from '../components/map'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar';
import IgAvatar from '../images/gatsby-icon.png'
import Highlight from '../components/highlight'
import Service from '../components/service'


const styles = {
  center: {
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center',
  },
  inLine: {
    textAlign: 'center',
    margin: '5px auto',
  },
  background: {
    backgroundColor: '#fcf5f5'
  }
}


function PageTemplate(props) {
  const { classes } = props

  return (
    <div>
        {console.log(props)}
        <div className={classes.background}>
          <Highlight
            intro={props.intro}
           />
        </div>
        <div>
          <Instagram />
        </div>
        <div className={classes.background}>
          <Service />
        </div>
        <GoogleMap />
        <Fab />
      </div>
  )  
}

export const IndexPageTemplate = withStyles(styles)(PageTemplate)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  

  return (
    <React.Fragment>
      <SEO />
      <Layout>
        <Jumbotron header="Aspiring Nail Artist" />
        <IndexPageTemplate
          intro={frontmatter.intro}
          title={frontmatter.title}
          heading={frontmatter.heading}
          subheading={frontmatter.subheading}
        />
      </Layout>
    </React.Fragment>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        subheading
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          avatar {
            relativePath
          }
        }
      }
    }
  }
`

