import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import PreviewCompatibleImage from "./PreviewCompatibleImage"

const styles = theme => ({
  gridItem: {
    padding: "10px",
    [theme.breakpoints.down("xs")]: {
      padding: "10px 0px",
    },
  },
  link: {
    textDecoration: "none",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  truncate: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  image: {
    marginTop: "-10px",
    marginLeft: "-10px",
    marginRight: "-10px",
    width: "100%",
    height: "300px",
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
})

const ProductGrid = props => {
  const { classes } = props
  const data = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
              id
              title
              handle
              createdAt
              images {
                id
                originalSrc
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              variants {
                price
              }
            }
          }
        }
      }
    `
  )

  return (
    <Grid style={{ maxWidth: "1024px", margin: '0 auto' }} justify="center" container>
      {data.allShopifyProduct.edges.map((item, index) => (
        <Grid className={classes.gridItem} item xs={12} sm={4} key={index}>
          <Paper style={{ padding: 15, height: "100%" }}>
            <Link
              className={classes.link}
              to={`shop/product/${item.node.handle}/`}
            >
              <div className={classes.itemSpace}>
                <div>
                  <div className={classes.image}>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: item.node.images[0].localFile,
                        alt: item.node.title,
                      }}
                    />
                  </div>
                  <Divider />
                  <div className={classes.space}>
                    <Typography color="primary" variant="body1" gutterBottom>
                      {item.node.title}
                    </Typography>
                  </div>
                </div>
                <div className={classes.flex}>
                  <div style={{ display: "inline" }}>
                    <Typography
                      style={{ paddingRight: 5 }}
                      inline={true}
                      color="textSecondary"
                      variant="h6"
                    >
                      USD
                    </Typography>
                    <Typography inline={true} color="primary" variant="h6">
                      {item.node.variants[0].price}
                    </Typography>
                  </div>
                  <Button size="small" className={classes.button}>
                    View Details
                  </Button>
                </div>
              </div>
            </Link>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}

export default withStyles(styles)(ProductGrid)
