import React, { Component } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
  featureCard: {
    display: "inline-flex",
    width: "300px",
    textAlign: "center",
    margin: "12px",
  },
  image: {
    maxWidth: "100px",
  },
});

class FeatureCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgPath: this.props.imgPath,
      title: this.props.title,
      description: this.props.description,
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.featureCard}>
        <CardContent>
          <img className={classes.image} src={this.state.imgPath} alt="img" />
          <br />
          <Typography variant="h6">{this.state.title}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {this.state.description}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(FeatureCard);
