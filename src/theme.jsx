import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial',
    fontSize: 18,
    htmlFontSize: 18,
    button: {
      fontSize: 16,
    }
  },
  palette: {
    primary: {
      main: '#673ab7',
      contrastText: '#fdd835',
    },
    secondary: {
      main: '#fdd835',
      contrastText: '#673ab7',
    },
    background: {
      default: "#656565",
    },
    text: {
      primary: '#fdd835',
    }
  },
  overrides: {
    MuiMenu: {
      paper: {
        backgroundColor: '#656565',
      }
    },
    MuiDialog: {
      paper: {
        backgroundColor: '#656565',
      }
    },
    MuiFormLabel: {
      root: {
        color: '#b79020',
        "&$focused": {
          color: '#b79020'
        },
      },
    },
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: '1px solid #fdd835'
        },
        '&:after': {
          borderBottom: `2px solid #fdd835`
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid #8BC34A`
        }
      }
    },
  }
});
export default theme;