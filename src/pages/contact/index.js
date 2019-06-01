import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import SEO from "../../components/seo"
import Layout from "../../components/Layout"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { navigate } from "gatsby-link"

const styles = theme => ({
  container: {
    display: "block",
  },
  textField: {
    display: "block",
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  headerText: {
    backgroundColor: 'rgba(254, 244, 244, 0.7)',
    minWidth: '300px',
    minHeight: '100px',
    textAlign: 'center',
    display: 'grid',
    alignItems: 'center',
  },

})

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(result => {
        navigate(form.getAttribute("action"))
      })
      .catch(error => alert(error))
  }

  render() {
    const { classes } = this.props

    return (
      <React.Fragment>
        <SEO />
        <Layout>
          <div className={classes.headerText}>
            <Typography style={{ opacity: 1 }} variant="h2">
              Contact
            </Typography>
          </div>
          <Paper
            style={{ margin: "30px auto", padding: 20, maxWidth: "968px" }}
          >
            <form
              name="contact"
              action="/contact/thanks"
              method="post"
              data-netlify="true"
              className={classes.container}
              autoComplete="off"
              onSubmit={this.handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <Typography variant="h4">Get In Touch</Typography>
              <TextField
                id="name"
                label="Name"
                type="text"
                name="name"
                required
                fullWidth
                className={classes.textField}
                onChange={this.handleChange("name")}
                margin="normal"
              />
              <TextField
                id="email"
                name="email"
                required
                fullWidth
                label="Email"
                type="email"
                className={classes.textField}
                onChange={this.handleChange("email")}
                margin="normal"
              />

              <TextField
                id="message"
                label="Message"
                name="message"
                multiline
                variant="outlined"
                required
                fullWidth
                rows="6"
                placeholder="Message"
                margin="normal"
                onChange={this.handleChange("message")}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button type="submit" variant="contained" color="secondary">
                Send
              </Button>
            </form>
          </Paper>
        </Layout>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Contact)
