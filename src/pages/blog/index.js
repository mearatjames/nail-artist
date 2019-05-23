import React, { Component } from "react"
import BlogList from "../../components/blog-list"
import { Link, graphql } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../components/Layout"
import Grid from '@material-ui/core/Grid'
import { withStyles } from "@material-ui/core/styles"
import Typography from '@material-ui/core/Typography'
import BlogCover from '../../images/jumbotron.jpg'


const styles = {
  header: {
    height: '600px',
    backgroundImage: `url(${BlogCover})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: '-70px'
  },
  headerText: {
    backgroundColor: 'rgba(254, 244, 244, 0.7)',
    minWidth: '300px',
    minHeight: '100px',
    textAlign: 'center',
    display: 'grid',
    alignItems: 'center',
  }
}

class Blog extends Component {
  render() {
    const { classes } = this.props
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <React.Fragment>
        <SEO />
        <Layout>
          <Grid container 
          justify="center"
          alignItems="center"
          className={classes.header}>
          <div className={classes.headerText}>
            <Typography style={{opacity: 1}} variant="h2">
              AiAi's Blog
            </Typography>
          </div>
          </Grid>
          <Grid container spacing={24} style={{margin: '0 auto', width: '80%'}}>
            {posts.map(({ node: post }, index) => (
              <Grid item key={index}>
                <BlogList post={post} />
              </Grid>
            ))}
          </Grid>
        </Layout>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Blog)

export const pageQuery = graphql`
  query BlogList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
