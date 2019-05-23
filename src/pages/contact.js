import React from 'react';
import { makeStyles } from '@material-ui/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import SEO from "../components/seo"
import Layout from "../components/Layout"
import Jumbotron from "../components/jumbotron"

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
   
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));


function Contact() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    age: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <React.Fragment>
        <SEO />
        <Layout>
            <Jumbotron header="Contact"/>
            <form name="contact" className={classes.container} autoComplete="off">
            <TextField
                id="standard-name"
                label="Name"
                required
                className={classes.textField}
                value={values.name}
                onChange={handleChange('name')}
                margin="normal"
            />
            <TextField
                id="standard-uncontrolled"
                required
                label="Email"
                type="email"
                className={classes.textField}
                margin="normal"
            />
            
            <TextField
                id="standard-full-width"
                label="Label"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                helperText="Full width!"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
            />
            </form>
        </Layout>
    </React.Fragment>
  );
}

export default Contact;
