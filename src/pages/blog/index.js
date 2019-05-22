import React, { Component } from "react"
import BlogList from "../../components/blog-list"
import { Link, graphql } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../components/Layout"
import Grid from '@material-ui/core/Grid';

export default class Blog extends Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <React.Fragment>
        <SEO />
        <Layout>
          <Grid container spacing={24} style={{margin: '0 auto', width: '80%'}}>
            {console.log(data)}
            {posts.map(({ node: post }) => (
              <Grid item>
                <BlogList post={post} />
              </Grid>
            ))}
          </Grid>
        </Layout>
      </React.Fragment>
    )
  }
}

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
