import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  nav: {
    width: "100%",
    height: "100vh",
    // paddingTop: theme.spacing(34),
    background: theme.palette.secondary.main,
  },
  icon: {
    position: "absolute",
    top: "20px",
    right: "20px",
    fontSize: "3.5em",
  },
  item: {
    fontSize: "2em",
    fontWeight: "bold",
    color: "#000"
  },
  line: {
    width: '130%',
    height: '2px',
    transform: 'rotate(-45deg)',
    backgroundColor: 'black',
    left: '0px',
    position: 'relative',
    bottom: '0',
  }
}));

export default useStyles;
