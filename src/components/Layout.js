/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./Layout.css"
import Footer from './footer'
import NavBar from './nav'
// import Carousel from './carousel'

const Layout = ({ children }) => (
        
        <div
          style={{
            margin: `0 auto`,
            paddingTop: 0,
          }}
        >
          <NavBar />
          <main>{children}</main>
          {/* <Carousel /> */}
          <Footer />
        </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
