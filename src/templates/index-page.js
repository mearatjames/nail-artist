import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { withStyles } from "@material-ui/core/styles"
import SEO from '../components/seo'
import Layout from '../components/Layout'
import Fab from '../components/fab'
import Jumbotron from '../components/jumbotron'
import Carousel from '../components/carousel'
import GoogleMap from '../components/map'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar';
import IgAvatar from '../images/gatsby-icon.png'
import Work from '../components/work'
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
  }
}


function PageTemplate(props) {
  const { classes } = props

  return (
    <div>
        <Grid style={{marginTop: 10}} justify="center" container spacing={1}>
          <Grid className={classes.center} item sm={6}>
            <div style={{margin: '0 auto'}}>
              <Typography variant="h4">
                Latest Instagram Feeds
              </Typography>
              <Typography className={classes.inLine} variant="subtitle1">
                Curious about what I have been up to?
              </Typography>
              <Typography className={classes.inLine} variant="subtitle1">
                Follow me on Instagram
              </Typography>
                <Avatar className={classes.inLine} alt="Remy Sharp" src={IgAvatar} />
                <div className={classes.inLine}>
                  <a style={{textDecoration: 'none', color: 'black'}} target='blank' href='https://www.instagram.com/aiai.91/'>
                    <Typography variant="h6">
                      @aiai.91
                      <span>
                        <i className="fab fa-instagram fa-lg"></i>
                      </span>
                    </Typography>
                  </a>
                </div>
            </div>
          </Grid>
          <Grid className={classes.center} item sm={6}>
            {/* <Carousel /> */}
          </Grid>
        </Grid>
        {/* <Work /> */}
        <GoogleMap />
        <div>
          <Highlight />
        </div>
        <Service />
        <h1>Test</h1>
        <h1>{props.title}</h1>
        <h1>{props.heading}</h1>
        <h1>{props.subheading}</h1>
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
          description
        }
      }
    }
  }
`

