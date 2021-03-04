import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../assets/img/logo.png";
import AppBarCollapse from "./AppBarCollapse";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "transparent",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    background: "white",
  },
  logo: {
    width: 300,
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="fixed">
        <Toolbar>
          <img src={logo} alt="Elegant Parker logo" className={classes.logo} />
          <AppBarCollapse />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
