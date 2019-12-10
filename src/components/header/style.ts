import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: "none"
    }
  },
  appBar: {
    background: "#000"
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textTransform: "capitalize"
  },
  menu: {
    margin: "8px 0"
  },
  logo: {
    margin: "10px 0 0",
    borderRadius: "50px",
    width: "50px",
    height: "50px"
  }
}));

export default useStyles;
