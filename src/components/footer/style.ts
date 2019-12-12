import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  footer: {
    color: '#757575',
    borderTop: `2px solid white`,
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    paddingTop: theme.spacing(3),
    background: "#1c1c1c",
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
    }
  },
  follow: {
    marginBottom: theme.spacing(4),
    color: 'white'
  },
  subscribe: {
    marginBottom: theme.spacing(4),
    color: 'white'
  },
  icon: {
    border: 'solid 2px white',
    padding: '10px 0',
    width: '50px',
    height: '50px',
    borderRadius: '50px',
    margin: '0 20px 25px 0',
  },
  toolbarTitle: {
    marginTop: theme.spacing(6),
    flexGrow: 1,
    textAlign: 'right'
  },
  link: {
    margin: theme.spacing(6, 3, 0, 0),
    textTransform: "capitalize",
    color: '#757575',
    fontSize: '1.1em',
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'none'
    }
  },
  bottom: {
    background: "#222",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
   
  }
}));

export default useStyles;
