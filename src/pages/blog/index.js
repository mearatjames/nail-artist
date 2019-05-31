import React, { Component } from "react"
import BlogList from "../../components/blog-list"
import { graphql } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../components/Layout"
import Grid from '@material-ui/core/Grid'
import { withStyles } from "@material-ui/core/styles"
import Typography from '@material-ui/core/Typography'
import BlogCover from '../../images/jumbotron.jpg'
import Pagination from "material-ui-flat-pagination"

const styles = {
  header: {
    height: '300px',
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
  },
  background: {
    paddingBottom: 20,
    backgroundColor: '#fcf5f5'
  }
}



class Blog extends Component {
  state = {
    offset: 0
  }

  handleClick = (offset) => {
    this.setState({ offset });
  }
 
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
          className={classes.header}
          >
          <div className={classes.headerText}>
            <Typography style={{opacity: 1}} variant="h2">
              AiAi's Blog
            </Typography>
          </div>
          </Grid>
          <div className={classes.background}>
              <Grid justify='center' container>
                {posts.slice(this.state.offset, this.state.offset + 4).map(({ node: post }, index) => (
                  <Grid style={{margin: '10px'}} item key={index}>
                    <BlogList post={post} />
                  </Grid>
                ))}
              </Grid>
          </div>
          <Grid item style={{textAlign: 'center'}} xs={12}>
            <Pagination
              limit={4}
              offset={this.state.offset}
              total={posts.length}
              onClick={(e, offset) => this.handleClick(offset)}
            />
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
                fluid(maxWidth: 460, quality: 100) {
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
