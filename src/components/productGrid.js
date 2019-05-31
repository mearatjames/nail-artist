import React from 'react'
import { useStaticQuery,  graphql, Link } from 'gatsby'

const ProductGrid = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(
          sort: {
            fields: [createdAt]
            order: DESC
          }
        ) {
          edges {
            node {
              id
              title
              handle
              createdAt
              images {
                id
                originalSrc
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              variants {
                price
              }
            }
          }
        }
      }
    `
  )

  return (
    <div>
        {data.allShopifyProduct.edges.map(item => (
        <Link to={`shop/product/${item.node.handle}/`}>
            {item.node.title}
        </Link>
      ))}
    </div>
  )
}

export default ProductGrid