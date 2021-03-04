import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import bannerIcon from "../assets/img/bannerIcon.png";

const styles = (theme) => ({
  root: {
    display: "flex",
    // margin: "20px",
    paddingTop: "100px",
    paddingBottom: "50px",
  },
  slogon: {
    paddingTop: "150px",
    maxWidth: "700px",
    display: "block",
  },
  bannerSubscribeButton: {
    marginTop: "20px",
    minWidth: "50%",
  },
  logo: {
    width: "100%",
  },
});

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        pt={6}
        pl={2}
        pr={2}
        mb={2}
        // className={classes.root}
        id="banner"
      >
        <div className={classes.slogon}>
          <Typography variant="h2">Park elegantly</Typography>
          <Typography variant="h4">
            A future parking experience. No queueing No struggle for payments
            and applying discounts. Smoothly all in your hands
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="#subscribe"
            className={classes.bannerSubscribeButton}
          >
            Subscribe
          </Button>
        </div>
        <div>
          <img
            src={bannerIcon}
            alt="Elegant Parker logo"
            className={classes.logo}
          />
        </div>
      </Box>
    );
  }
}

export default withStyles(styles)(Banner);
