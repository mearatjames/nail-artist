import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

export const IndexPageTemplate = ({ title, heading, subheading }) => (
  <div>
    <h1>Test</h1>
    <h1>{title}</h1>
    <h1>{heading}</h1>
    <h1>{subheading}</h1>
  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
      />
    </Layout>
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
      }
    }
  }
`

