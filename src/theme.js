import red from '@material-ui/core/colors/red';
import teal from '@material-ui/core/colors/teal'
import pink from '@material-ui/core/colors/pink'
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: pink[800],
    },
    secondary: {
      main: pink[400],
    },
    error: {
      main: red[700],
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;