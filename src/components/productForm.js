import React, { useState, useContext, useEffect } from "react"
import PropTypes from "prop-types"
import StoreContext from "../context/storeContext"
import VariantSelector from "./variantSelector"
import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import PreviewCompatibleImage from "./PreviewCompatibleImage"
import TextField from "@material-ui/core/TextField"
import BackIcon from "@material-ui/icons/ArrowBackIos"
import { Link } from 'gatsby'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "1024px",
    margin: "0 auto",
    padding: "15px 0",
  },
  center: {
    margin: "0 auto",
    marginTop: 15,
  },
  image: {
    boxShadow: "-2px 10px 52px -16px rgba(0,0,0,0.56)",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  itemSpace: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  space: {
    padding: "10px 0px",
  },
  qty: {
    maxWidth: "80px",
  },
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
      {console.log(props)}
      <Grid
        direction="row"
        alignItems="center"
        container
        className={classes.root}
      >
        <Grid style={{ padding: "0 10px" }} item xs={12} sm={6}>
          <Paper elevation={4}>
          <div style={{height: 400}}>
            <PreviewCompatibleImage
              imageInfo={{
                image: props.product.images[0].localFile,
                alt: props.product.title,
              }}
            />
          </div>
          </Paper>
        </Grid>
        <Grid style={{padding: 15}} item xs={12} sm={6} alignContent="center">
            <Link to='/shop' style={{textDecoration: 'none'}}>
          <Button variant="outlined">
          <BackIcon />
          Back to product list</Button>
            </Link>
          <Typography style={{paddingTop: 20}} color="primary" variant="h5" gutterBottom>
            {props.product.title}
          </Typography>
          <div
            dangerouslySetInnerHTML={{ __html: props.product.descriptionHtml }}
          />
          <div className={classes.flex}>
            <div>
              <Typography
                style={{ paddingRight: 5 }}
                inline={true}
                color="textSecondary"
                variant="h6"
              >
                USD
              </Typography>
              <Typography inline={true} color="primary" variant="h6">
                {productVariant.price}
              </Typography>
            </div>
          </div>
          <div>
            <TextField
              id="qty"
              label="QTY"
              onChange={handleQuantityChange}
              value={quantity}
              className={classes.qty}
              type="number"
              margin="normal"
              variant="filled"
            />
          </div>
          {variantSelectors}
          <Button
            color="primary"
            variant="contained"
            size="large"
            type="submit"
            disabled={!available}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
          {!available && (
            <Typography color="primary" variant="body1">
              This Product is out of Stock!
            </Typography>
          )}
        </Grid>
      </Grid>
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
