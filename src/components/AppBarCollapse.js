import React from "react";
import { Button, Link, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";

const styles = (theme) => ({
  root: {
    position: "absolute",
    right: 0,
  },
  buttonBar: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    margin: "10px",
    paddingLeft: "16px",
    right: 0,
    position: "relative",
    width: "100%",
    background: "transparent",
  },
});

const AppBarCollapse = (props) => (
  <div className={props.classes.root}>
    <ButtonAppBarCollapse>
      <MenuItem component={Link} href="#banner">Home</MenuItem>
      <MenuItem component={Link} href="#features">Features</MenuItem>
      <MenuItem component={Link} href="#vision">Our Vision</MenuItem>
      <MenuItem component={Link} href="#howto">How it works</MenuItem>
      <MenuItem component={Link} href="#contact">Contact</MenuItem>
      <MenuItem component={Link} href="#subscribe">Subscribe</MenuItem>
    </ButtonAppBarCollapse>
    <div className={props.classes.buttonBar} id="appbar-collapse">
      <Button color="inherit" href="#banner">Home</Button>
      <Button color="inherit" href="#features">Features</Button>
      <Button color="inherit" href="#vision">Our Vision</Button>
      <Button color="inherit" href="#howto">How it works</Button>
      <Button color="inherit" href="#contact">Contact</Button>
      <Button color="inherit" href="#subscribe">Subscribe</Button>
    </div>
  </div>
);

export default withStyles(styles)(AppBarCollapse);
