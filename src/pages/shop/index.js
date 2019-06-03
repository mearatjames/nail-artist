import React, { useContext } from "react"
import SEO from "../../components/seo"
import ProductGrid from "../../components/productGrid"
import Fab from "@material-ui/core/Fab"
import CartIcon from "@material-ui/icons/ShoppingCart"
import StoreContext from "../../context/storeContext"
import Typography from "@material-ui/core/Typography"
import Badge from "@material-ui/core/Badge"
import { Link } from "gatsby"
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
  headerText: {
    backgroundColor: "#fcf5f5",
    minWidth: "300px",
    minHeight: "100px",
    textAlign: "center",
    display: "grid",
    alignItems: "center",
  },
})

const Shop = props => {
  const { classes } = props
  const context = useContext(StoreContext)
  const { lineItems } = context.checkout

  return (
    <React.Fragment>
      <SEO />
      <div className={classes.headerText}>
        <Typography variant="h2">AiAi's Shop</Typography>
      </div>
      <ProductGrid />
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
    </React.Fragment>
  )
}

export default withStyles(styles)(Shop)
