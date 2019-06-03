import React, { useContext, useState } from 'react';
import { Link, graphql } from 'gatsby'
import StoreContext from '../context/storeContext'
import ProductForm from '../components/productForm'
import Fab from "@material-ui/core/Fab"
import CartIcon from "@material-ui/icons/ShoppingCart"
import Badge from "@material-ui/core/Badge"
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  cartButton: {
    position: 'fixed',
    right: 15,
    bottom: 70,
    zIndex: 1000
  }
});


const ProductPage = (props) => {
  const {classes} = props
  const context = useContext(StoreContext)
  const { lineItems } = context.checkout
  const product = props.data.shopifyProduct
    return (
        <div>
        <ProductForm product={product} />
        <Link style={{ textDecoration: "none" }} to="/shop/cart">
        <Badge className={classes.cartButton} badgeContent={lineItems.length} color="primary">
          <Fab color="secondary" aria-label="Cart">
            <CartIcon />
          </Fab>
        </Badge>
      </Link>
        </div>
    //   <Flex flexWrap='wrap'>
    //     <Box pr={[null, 3]} width={[1, 1/2]}>
    //       {product.images.map(x => (
    //         <Img
    //           fluid={x.localFile.childImageSharp.fluid}
    //           key={x.id}
    //           alt={product.title}
    //         />
    //       ))}
    //     </Box>
    //     <Box width={[1, 1/2]}>
    //       <h1>{product.title}</h1>
    //       <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
    //       <ProductForm product={product} />
    //     </Box>
    //   </Flex >
    )
  }
  
  export const query = graphql`
    query($handle: String!) {
      shopifyProduct(handle: { eq: $handle }) {
        id
        title
        handle
        productType
        descriptionHtml
        shopifyId
        options {
          id
          name
          values
        }
        variants {
          id
          title
          price
          availableForSale
          shopifyId
          selectedOptions {
            name
            value
          }
        }
        images {
          originalSrc
          id
          localFile {
            childImageSharp {
              fluid(maxWidth: 910) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `
  
  export default withStyles(styles)(ProductPage)