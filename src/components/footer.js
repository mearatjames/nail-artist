import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <footer>
    <div
      style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/admin/"
          style={{
              textDecoration: `none`,
            }}
        >
          Admin
        </Link>
      </h1>
    </div>
    <div>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
)

export default Footer