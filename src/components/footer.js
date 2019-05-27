import { Link } from "gatsby"
import React from "react"
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  footer: {
    backgroundColor: '#f9edf1',
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
    textDecoration: 'none',
    color: 'black',
    fontSize: '0.7rem',
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
          <a
            href="/admin"
            target="blank"
            className={classes.admin}
          >
            Admin
          </a>
      </div>
      <div className={classes.footerText}>
          © {new Date().getFullYear()}, Powered by
          {` `}
          <a className={classes.footerText} href="https://www.mearat.com">Mearat</a>
      </div>
    </div>
  </footer>
)
}

export default withStyles(styles)(Footer)