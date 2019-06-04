import React, { Component } from "react"
import BlogList from "../../components/blog-list"
import { graphql } from "gatsby"
import SEO from "../../components/seo"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Pagination from "material-ui-flat-pagination"

const styles = theme => ({
  headerText: {
    backgroundColor: "#fcf5f5",
    minWidth: "300px",
    minHeight: "100px",
    textAlign: "center",
    display: "grid",
    alignItems: "center",
  },
  background: {
    width: "100%",
    padding: "30px 15px",
    margin: "0 auto",
    [theme.breakpoints.down("xs")]: {
      padding: "10px 0px",
    },
  },
  gridItem: {
    padding: "10px",
    [theme.breakpoints.down("xs")]: {
      padding: "10px 0px",
    },
  },
})

class Blog extends Component {
  state = {
    offset: 0,
  }

  handleClick = offset => {
    this.setState({ offset })
  }

  render() {
    const { classes } = this.props
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <React.Fragment>
        <SEO />
        <div className={classes.headerText}>
          <Typography variant="h2">AiAi's Blog</Typography>
        </div>
        <div className={classes.background}>
          <Grid
            style={{ maxWidth: "1024px", margin: "0 auto" }}
            justify="center"
            container
          >
            {posts
              .slice(this.state.offset, this.state.offset + 4)
              .map(({ node: post }, index) => (
                <Grid
                  className={classes.gridItem}
                  item
                  xs={12}
                  sm={6}
                  key={index}
                >
                  <BlogList post={post} />
                </Grid>
              ))}
          </Grid>
        </div>
        <Grid item style={{ textAlign: "center", padding: 10 }} xs={12}>
          <Pagination
            limit={4}
            offset={this.state.offset}
            total={posts.length}
            onClick={(e, offset) => this.handleClick(offset)}
          />
        </Grid>
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
