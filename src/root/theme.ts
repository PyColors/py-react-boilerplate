import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    background: {
      default: "#111"
    },
    primary: {
      main: "#111"
    },
    secondary: {
      main: "#ffff07"
    }
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
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
          // backgroundImage: `url(${"../../bg.png"})`,
        }
      }
    }
  }
});
