import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Content, { HTMLContent } from "../components/content"
import Helmet from "react-helmet"
import Typography from "@material-ui/core/Typography"

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div
      style={{ margin: "20px auto 10px auto", maxWidth: "768px", width: "80%" }}
    >
      <div>
        <Typography
          align="center"
          color="primary"
          component="h4"
          variant="h3"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          align="center"
          color="textSecondary"
          variant="subtitle1"
          gutterBottom
        >
          {description}
        </Typography>
      </div>
      <PostContent className="blog" content={content} />
    </div>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <React.Fragment>
      <SEO />
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </React.Fragment>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
