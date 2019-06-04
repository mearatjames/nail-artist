import React, { useContext } from "react"
import { Link, graphql } from "gatsby"
import StoreContext from "../context/storeContext"
import ProductForm from "../components/productForm"
import Fab from "@material-ui/core/Fab"
import CartIcon from "@material-ui/icons/ShoppingCart"
import Badge from "@material-ui/core/Badge"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  cartButton: {
    position: "fixed",
    right: 15,
    bottom: 70,
    zIndex: 1000,
  },
  productPage: {
    padding: '40px 0px',

  }
})

const ProductPage = props => {
  const { classes } = props
  const context = useContext(StoreContext)
  const { lineItems } = context.checkout
  const product = props.data.shopifyProduct
  return (
    <div className={classes.productPage}>
      <ProductForm product={product} />
      <Link style={{ textDecoration: "none" }} to="/shop/cart">
        <Badge
          className={classes.cartButton}
          badgeContent={lineItems.length}
          color="primary"
        >
          <Fab color="secondary" aria-label="Cart">
            <CartIcon />
          </Fab>
        </Badge>
      </Link>
    </div>
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
