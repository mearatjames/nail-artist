import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import PreviewCompatibleImage from './PreviewCompatibleImage'

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 500,
    height: "100%",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}

function SimpleCard(props) {
  const { classes } = props
  const { frontmatter } = props.post

  return (
    <Card className={classes.card}>
      <CardContent>
      <PreviewCompatibleImage
            imageInfo={{
              image: props.post.frontmatter.featuredimage,
              alt: `featured image thumbnail for post ${props.post.title}`,
            }}
          />
        <Typography variant="h4">
          {frontmatter.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {frontmatter.date}
        </Typography>
        <Typography component="p">
          {props.post.excerpt}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color='secondary' href={props.post.fields.slug} size="small">Read More</Button>
      </CardActions>
    </Card>
  )
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleCard)
