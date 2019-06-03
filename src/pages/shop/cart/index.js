import React, { useContext } from "react"
import StoreContext from "../../../context/storeContext"
import LineItems from "./lineItems"
import List from "@material-ui/core/List"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

const styles = theme => ({
  root: {
    maxWidth: 1024,
    margin: "0 auto",
    padding: "40px 15px 15px 15px",
  },
  headerText: {
    backgroundColor: "#fcf5f5",
    minWidth: "300px",
    minHeight: "100px",
    textAlign: "center",
    display: "grid",
    alignItems: "center",
  },
  total: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "350px",
    margin: "0 0 0 auto",
  },
  checkout: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
})

const Cart = props => {
  const { classes } = props
  const context = useContext(StoreContext)
  const { checkout } = context

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const line_items = checkout.lineItems.map(line_item => {
    return <LineItems key={line_item.id.toString()} line_item={line_item} />
  })

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom={true} >Here's what's in your cart.</Typography>
      <List>{line_items}</List>
      <div className={classes.total}>
        <Typography inline={true} variant="body1">
          Subtotal
        </Typography>
        <Typography align="right" inline={true} variant="body1">
          $ {checkout.subtotalPrice}
        </Typography>
      </div>
      <div className={classes.total}>
        <Typography inline={true} variant="body1">
          Taxes (calculated upon checkout)
        </Typography>
        <Typography align="right" inline={true} variant="body1">
          $ {checkout.totalTax}
        </Typography>
      </div>
      <div className={classes.total}>
        <Typography inline={true} variant="h6">
          Total
        </Typography>
        <Typography align="right" inline={true} variant="h6">
          $ {checkout.totalPrice}
        </Typography>
      </div>
      <div  className={classes.checkout}>
      <Button
        color="primary"
        variant="contained"
        size="large"
        type="submit"
        onClick={handleCheckout}
      >
        Checkout
      </Button>
      </div>
    </div>
  )
}

export default withStyles(styles)(Cart)
