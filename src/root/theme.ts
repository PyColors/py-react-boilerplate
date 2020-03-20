import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    background: {
      default: "#eee"
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
      "Comfortaa",
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
        ".MuiTab-root": {
          textTransform: "inherit"
        }
        // body: {
        //   backgroundImage: `url(${"../../bg.png"})`,
        // }
      }
    }
  }
});
