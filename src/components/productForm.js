import React, { useState, useContext, useEffect } from "react"
import PropTypes from "prop-types"
import StoreContext from "../context/storeContext"
import VariantSelector from "./variantSelector"
import { makeStyles } from "@material-ui/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import Hidden from "@material-ui/core/Hidden"
import Paper from "@material-ui/core/Paper"
import PreviewCompatibleImage from "./PreviewCompatibleImage"

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "1024px",
    backgroundColor: "#fcf5f5",
    margin: '0 auto',
    padding: '15px 0'
  },
  list: {
    maxWidth: "400px",
    minWidth: "200px",
    margin: "0 auto",
  },
  listItem: {
    "&:hover": {
      color: "red",
    },
  },
  listItemSelected: {
    boxShadow: "-2px 10px 52px -16px rgba(0,0,0,0.56)",
    backgroundColor: "white !important",
    color: "#ff5957",
  },
  center: {
    margin: "0 auto",
    marginTop: 15,
  },
  select: {
    maxWidth: 300,
    margin: '15px auto',
  },
  image: {
    boxShadow: "-2px 10px 52px -16px rgba(0,0,0,0.56)",
  }
}))

const ProductForm = props => {
  const classes = useStyles()
  const [quantity, setQuantity] = useState(1)
  const [variant, setVariant] = useState(props.product.variants[0])
  const context = useContext(StoreContext)
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  function handleListItemClick(event, index) {
    setSelectedIndex(index)
  }

  function handleChange(event) {
    setSelectedIndex(event.target.value)
  }

  const hasVariants = props.product.variants.length > 1
  const productVariant =
    context.client.product.helpers.variantForOptions(props.product, variant) ||
    variant
  const [available, setAvailable] = useState(productVariant.availableForSale)

  useEffect(() => {
    let defaultOptionValues = {}
    props.product.options.forEach(selector => {
      defaultOptionValues[selector.name] = selector.values[0]
    })
    setVariant(defaultOptionValues)
  }, [])

  useEffect(() => {
    checkAvailability(props.product.shopifyId)
  }, [productVariant])

  const checkAvailability = productId => {
    context.client.product.fetch(productId).then(product => {
      // this checks the currently selected variant for availability
      const result = product.variants.filter(
        variant => variant.id === productVariant.shopifyId
      )
      setAvailable(result[0].available)
    })
  }

  const handleQuantityChange = event => {
    setQuantity(event.target.value)
  }

  const handleOptionChange = event => {
    const { target } = event
    setVariant(prevState => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }

  const handleAddToCart = () => {
    context.addVariantToCart(productVariant.shopifyId, quantity)
    console.log(context)
  }

  const variantSelectors = hasVariants
    ? props.product.options.map(option => {
        return (
          <VariantSelector
            onChange={handleOptionChange}
            key={option.id.toString()}
            option={option}
          />
        )
      })
    : null

  return (
    <>
      <Grid
        wrap="wrap-reverse"
        direction="row"
        alignItems="center"
        container
        className={classes.root}
      >
        <Grid style={{ padding: "0 10px" }} item xs={12} sm={6}>
          <Paper elevation={4}>
            <PreviewCompatibleImage
              imageInfo={{
                image: props.intro.blurbs[selectedIndex].image,
                alt: props.intro.blurbs[selectedIndex].text,
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} alignContent="center">
          <Avatar
            alt={props.intro.heading}
            src={"/images/" + props.intro.avatar.relativePath}
            className={classes.center}
          />
          <Typography align="center" color="primary" variant="h5" gutterBottom>
            {props.intro.heading}
          </Typography>
          <Hidden smUp>
            <Paper className={classes.select}>
              <Select
                value={selectedIndex}
                onChange={handleChange}
                style={{ minWidth: 200, display: "flex" }}
              >
                {props.intro.blurbs.map((item, index) => (
                  <MenuItem key={index} value={index}>
                    {item.text}
                  </MenuItem>
                ))}
              </Select>
            </Paper>
          </Hidden>
          <Hidden xsDown>
            <List component="ul" className={classes.list}>
              {props.intro.blurbs.map((item, index) => (
                <ListItem
                  className={classes.listItem}
                  classes={{
                    selected: classes.listItemSelected,
                  }}
                  key={index}
                  button
                  selected={selectedIndex === index}
                  onClick={event => handleListItemClick(event, index)}
                >
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Hidden>
        </Grid>
      </Grid>
      <h3>${productVariant.price}</h3>
      {variantSelectors}
      <label htmlFor="quantity">Quantity </label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        step="1"
        onChange={handleQuantityChange}
        value={quantity}
      />
      <br />
      <button type="submit" disabled={!available} onClick={handleAddToCart}>
        Add to Cart
      </button>
      {!available && <p>This Product is out of Stock!</p>}
    </>
  )
}

// ProductForm.propTypes = {
//   product: PropTypes.shape({
//     descriptionHtml: PropTypes.string,
//     handle: PropTypes.string,
//     id: PropTypes.string,
//     shopifyId: PropTypes.string,
//     images: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.string,
//         originalSrc: PropTypes.string,
//       })
//     ),
//     options: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.string,
//         name: PropTypes.string,
//         values: PropTypes.arrayOf(PropTypes.string),
//       })
//     ),
//     productType: PropTypes.string,
//     title: PropTypes.string,
//     variants: PropTypes.arrayOf(
//       PropTypes.shape({
//         availableForSale: PropTypes.bool,
//         id: PropTypes.string,
//         price: PropTypes.string,
//         title: PropTypes.string,
//         shopifyId: PropTypes.string,
//         selectedOptions: PropTypes.arrayOf(
//           PropTypes.shape({
//             name: PropTypes.string,
//             value: PropTypes.string,
//           })
//         ),
//       })
//     ),
//   }),
//   addVariantToCart: PropTypes.func,
// }

export default ProductForm
