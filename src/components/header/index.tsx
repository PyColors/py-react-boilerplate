import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { APP_NAME } from "../../constants/constants";
import useStyles from "./style";

import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Locale from "../locale";

import SimpleModal from "../simple-modal";
import Nav from '../nav'

import logo from "./logo-black.png";

 /**
 * Transform `item` to nice string for URLs
 * `toLowerCase`
 * Replace all spaces by `-`
 * @param item
 */
const transform = (item: string) => {
  return item
    .toLowerCase()
    .split(" ")
    .join("-");
};

const options = ["Login", "Contact", "Sign-Up"];

const ITEM_HEIGHT = 48;

const Header = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment key="header">
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >

       {/* <Nav />    */}

        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap>
            <Link
              variant="button"
              color="textPrimary"
              href="/"
              className={classes.link}
            >
              <img className={classes.logo} alt={APP_NAME} src={logo} />
            </Link>
          </Typography>
          <nav className={classes.toolbarTitle}>
            <Link
              variant="button"
              
              href="/about"
              className={classes.link}
            >
              About
            </Link>
            <Link
              variant="button"
            
              href="/contact"
              className={classes.link}
            >
              Contact
            </Link>  
          </nav>



          <div>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: 200
                }
              }}
            >
              {options.map(option => (
                <MenuItem
                  key={option}
                  selected={option === "Atria"}
                  onClick={handleClose}
                >
                  <Link
                    href={transform(option)}
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    {option}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </div>

          <SimpleModal>
             <Nav />
          </SimpleModal>  
  
          {/* to switch the language */}
          <Locale />
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
