import React from "react";
import { Container, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import flowDiagram from "../assets/img/flowdiagram.png";

const styles = (theme) => ({
  root: {
    padding: "10px",
    paddingTop: "100px",
  },
  imgFigue: {
    textAlign: "center",
    marginTop: "30px",
  },
  img: {
    maxWidth: "400px",
    width: "100%",
  }
});

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <Container maxWidth="md" id="vision" className={classes.root}>
          <Typography variant="h2">Our Vision</Typography>
          <Typography variant="body1" align="justify">
            Our aim is to build a new ecosystem to form our future parking
            experience. Nowadays tapping-free entry/exit and autopayment are
            started to appear in the real-world environment, however, it often
            requires you to register to become the shopping mall's member,
            install a mobile app and still will only work with that one specific
            shopping mall's car park. We believed that everyone should be able
            to enjoy all the features and benefits that technology have brought
            to us with just one application even parking in the car park managed
            by a different company, a different brand of the gate or system.
            Therefore, Elegant Parker will become a third-party product that
            centralises car park systems so as to provide the best convenience
            to the social community.
          </Typography>
          <figure className={classes.imgFigue}>
            <img src={flowDiagram} alt="flow diagram" className={classes.img}></img>
            <figcaption><Typography variant="caption">Overall view</Typography></figcaption>
          </figure>
      </Container>
    );
  }
}

export default withStyles(styles)(About);
