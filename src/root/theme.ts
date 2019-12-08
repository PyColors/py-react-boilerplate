import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    background: {
      default: "#E0FFFF"
    },
    primary: {
      main: "#4cc3ff"
    },
    secondary: {
      main: "#8a9496"
    }
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          background: "#fff"
        }
      }
    }
  }
});
