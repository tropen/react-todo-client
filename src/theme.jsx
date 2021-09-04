import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial',
    fontSize: 18,
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
});
export default theme;