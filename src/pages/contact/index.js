import React from 'react';
import { makeStyles } from '@material-ui/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import SEO from "../../components/seo"
import Layout from "../../components/Layout"
import Jumbotron from "../../components/jumbotron"
import Paper from "@material-ui/core/Paper"
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { navigate } from 'gatsby-link'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'block',
  },
  textField: {
    display: 'block',
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}


function Contact() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    console.log(values)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...values,
      }),
    })
      .then((result) => {
        console.log(result)
        navigate(form.getAttribute('action'))
      })
      .catch(error => alert(error))
  }

  return (
    <React.Fragment>
        <SEO />
        <Layout>
            <Jumbotron header="Contact"/>
            <Paper style={{margin: '30px auto', padding: 20, maxWidth: '80%'}}>
            <form 
            name="contact" 
            action='/contact/thanks' 
            method="post" data-netlify="true" 
            className={classes.container} 
            autoComplete="off"
            onSubmit={handleSubmit}
            >
            <input type="hidden" name="form-name" value="contact" />
            <Typography variant="h3">
                Get In Touch
            </Typography>
            <TextField
                id='name'
                label="Name"
                type='text'
                name='name'
                required
                fullWidth
                className={classes.textField}
                onChange={handleChange('name')}
                margin="normal"
            />
            <TextField
                id='email'
                name='email'
                required
                fullWidth
                label="Email"
                type="email"
                className={classes.textField}
                onChange={handleChange('email')}
                margin="normal"
            />
            
            <TextField
                id='message'
                label="Message"
                name='message'
                multiline
                variant="outlined"
                required
                fullWidth
                rows="6"
                placeholder="Message"
                margin="normal"
                onChange={handleChange('message')}
                InputLabelProps={{
                shrink: true,
                }}
            />
            <Button type='submit' variant="contained" color="secondary">
                Send
            </Button>
            </form>
            </Paper>
        </Layout>
    </React.Fragment>
  );
}

export default Contact;
