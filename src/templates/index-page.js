import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { withStyles } from "@material-ui/core/styles"
import SEO from "../components/seo"
import Fab from "../components/fab"
import Jumbotron from "../components/jumbotron"
import Instagram from "../components/instagram"
import GoogleMap from "../components/map"
import Highlight from "../components/highlight"
import Service from "../components/service"
import MainPitch from "../components/mainPitch"

const styles = {
  center: {
    display: "grid",
    justifyItems: "center",
    alignItems: "center",
  },
  inLine: {
    textAlign: "center",
    margin: "5px auto",
  },
  background: {
    backgroundColor: "#fcf5f5",
    padding: "20px 0",
  },
}

function PageTemplate(props) {
  const { classes } = props

  return (
    <div>
      <MainPitch mainpitch={props.mainpitch} />
      <div className={classes.background}>
        <Highlight intro={props.intro} />
      </div>
      <div>
        <Instagram />
      </div>
      <div className={classes.background}>
        <Service services={props.services} />
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
      <Jumbotron landingPage={true} header="Aspiring Nail Artist" />
      <IndexPageTemplate
        intro={frontmatter.intro}
        services={frontmatter.services}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
      />
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
        mainpitch {
          title
          subtitle
          description
        }
        services {
          title
          description
          icon {
            relativePath
          }
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 720, quality: 100) {
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
