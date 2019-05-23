import { Link } from "gatsby"
import React from "react"
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  footer: {
    backgroundColor: '#F5F5F5',
    height: 80,
    textAlign: 'center',
    alignItems: 'center',
    display: 'grid',
    position: 'relative',
    bottom: 0,
    left: 0,
    width: '100%'
  },
  footerText: {

  },
  admin: {
    textDecoration: 'none',
    color: 'black',
    paddingTop: 20,

  }
});

const Footer = (props) => {

  const { classes } = props;

return (
  <footer>
    <div className={classes.footer}>
      <div>
          <Link
            to="/admin"
            className={classes.admin}
          >
            Admin
          </Link>
      </div>
      <div className={classes.footerText}>
          © {new Date().getFullYear()}, Powered by
          {` `}
          <a href="https://www.mearat.com">Mearat</a>
      </div>
    </div>
  </footer>
)
}

export default withStyles(styles)(Footer)