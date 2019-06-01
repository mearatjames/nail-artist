import { MuiThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "../theme"
import React from "react"
import PropTypes from "prop-types"
import "./Layout.css"
import Footer from "./footer"
import NavBar from "./nav"
import StoreContext, { defaultStoreContext } from '../context/storeContext'

class Layout extends React.Component {
  state = {
    store: {
      ...defaultStoreContext,
      addVariantToCart: (variantId, quantity) => {
        console.log('here')
        if (variantId === "" || !quantity) {
          console.error("Both a size and quantity are required.")
          return
        }

        this.setState(state => ({
          store: {
            ...state.store,
            adding: true,
          },
        }))

        const { checkout, client } = this.state.store
        const checkoutId = checkout.id
        const lineItemsToUpdate = [
          { variantId, quantity: parseInt(quantity, 10) },
        ]

        return client.checkout
          .addLineItems(checkoutId, lineItemsToUpdate)
          .then(checkout => {
            console.log('clientcheckout')
            this.setState(state => ({
              store: {
                ...state.store,
                checkout,
                adding: false,
              },
            }))
          })
      },
      removeLineItem: (client, checkoutID, lineItemID) => {
        return client.checkout
          .removeLineItems(checkoutID, [lineItemID])
          .then(res => {
            this.setState(state => ({
              store: {
                ...state.store,
                checkout: res,
              },
            }))
          })
      },
      updateLineItem: (client, checkoutID, lineItemID, quantity) => {
        const lineItemsToUpdate = [
          { id: lineItemID, quantity: parseInt(quantity, 10) },
        ]

        return client.checkout
          .updateLineItems(checkoutID, lineItemsToUpdate)
          .then(res => {
            this.setState(state => ({
              store: {
                ...state.store,
                checkout: res,
              },
            }))
          })
      },
    },
  }

  async initializeCheckout() {
    // Check for an existing cart.
    console.log('init')
    const isBrowser = typeof window !== "undefined"
    const existingCheckoutID = isBrowser
      ? localStorage.getItem("shopify_checkout_id")
      : null

    const setCheckoutInState = checkout => {
      console.log('setCheckout')
      if (isBrowser) {
        localStorage.setItem("shopify_checkout_id", checkout.id)
      }

      this.setState(state => ({
        store: {
          ...state.store,
          checkout,
        },
      }))
    }

    const createNewCheckout = () => this.state.store.client.checkout.create()
    const fetchCheckout = id => this.state.store.client.checkout.fetch(id)

    if (existingCheckoutID) {
      try {
        const checkout = await fetchCheckout(existingCheckoutID)

        // Make sure this cart hasn’t already been purchased.
        if (!checkout.completedAt) {
          console.log('fetch')
          setCheckoutInState(checkout)
          return
        }
      } catch (e) {
        localStorage.setItem("shopify_checkout_id", null)
      }
    }

    const newCheckout = await createNewCheckout()
    setCheckoutInState(newCheckout)
  }

  componentDidMount() {
    this.initializeCheckout()
  }

  render() {
    const { children } = this.props

    return (
      <StoreContext.Provider value={this.state.store}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar />
          <main>{children}</main>
          <Footer />
        </MuiThemeProvider>
      </StoreContext.Provider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
