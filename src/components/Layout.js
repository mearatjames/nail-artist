import { MuiThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "../theme"
import React from "react"
import PropTypes from "prop-types"
import "./Layout.css"
import Footer from "./footer"
import NavBar from "./nav"
// import Carousel from './carousel'

const Layout = ({ children }) => (

  <MuiThemeProvider theme={theme}>
    <CssBaseline />
      <NavBar />
      <main>{children}</main>
      {/* <Carousel /> */}
      <Footer />
  </MuiThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
