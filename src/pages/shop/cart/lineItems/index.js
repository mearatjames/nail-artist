import React, { useContext, useState } from "react"
import StoreContext from "../../../../context/storeContext"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import ListItem from "@material-ui/core/ListItem"
import Divider from "@material-ui/core/Divider"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import TextField from "@material-ui/core/TextField"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/styles"
import DeleteIcon from "@material-ui/icons/Delete"

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "1024px",
    margin: "0 auto",
  },
  listItem: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '10px 0px'
  },
  qty: {
    maxWidth: 100,
  },
  align: {
    display: 'flex',
    alignItems: 'center',
  }
}))

const LineItem = props => {
  const classes = useStyles()
  const context = useContext(StoreContext)
  const { line_item } = props
  const [quantity, setQuantity] = useState(line_item.quantity)

  const handleRemove = () => {
    context.removeLineItem(context.client, context.checkout.id, line_item.id)
  }

  const handleQty = event => {
    setQuantity(event.target.value)
    context.updateLineItem(
      context.client,
      context.checkout.id,
      line_item.id,
      event.target.value
    )
  }

  const variantImage = line_item.variant.image ? (
    <img
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      height="60px"
    />
  ) : null

  return (
    <React.Fragment>
      <ListItem className={classes.listItem}>
        <div className={classes.align}>
        {variantImage}
        <ListItemText
          primary={line_item.title}
          secondary={"$ " + line_item.variant.price}
        />
        </div>
        <div className={classes.align}>
            <TextField
              className={classes.qty}
              id="outlined-number"
              label="Qty"
              value={quantity}
              onChange={handleQty}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              variant="outlined"
            />
          <IconButton onClick={handleRemove} aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </div>
      </ListItem>
      <Divider />
    </React.Fragment>
  )
}

export default LineItem
