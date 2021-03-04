import React from "react";
import { Container, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
  root: {
    paddingTop: "80px",
    paddingBottom: "60px",
  },
});

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <Container maxWidth="md" id="contact" className={classes.root}>
        <Typography variant="h2">Stay In Touch</Typography>
        <p>contact@elegantparker.com</p>
      </Container>
    );
  }
}

export default withStyles(styles)(Contact);
