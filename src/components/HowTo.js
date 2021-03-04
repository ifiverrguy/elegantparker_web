import React from "react";
import {
  Card,
  CardContent,
  Container,
  Typography,
  Box,
} from "@material-ui/core";
import "antd/dist/antd.css";
import { Tabs } from "antd";
import Filter1Icon from "@material-ui/icons/Filter1";
import Filter2Icon from "@material-ui/icons/Filter2";
import Filter3Icon from "@material-ui/icons/Filter3";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
  root: {
    paddingTop: "60px",
  },
  card: {
    width: "300px",
    textAlign: "left",
    margin: "12px",
  },
});

const { TabPane } = Tabs;

class HowTo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <Tabs
        defaultActiveKey="user"
        centered
        id="howto"
        className={classes.root}
      >
        <TabPane tab="For car owners" key="user">
          <Container>
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              pt={2}
              mb={6}
              id="features"
            >
              <Card className={classes.card}>
                <CardContent>
                  <Filter1Icon fontSize="large" color="primary" />
                  <Typography variant="h6">Register</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Set up an account and register your cars and card for
                    payment
                  </Typography>
                </CardContent>
              </Card>
              <Card className={classes.card}>
                <CardContent>
                  <Filter2Icon fontSize="large" color="primary" />
                  <Typography variant="h6">Just Park</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Check the availability from our real-time parking space
                    monitor. Straight in straight out without tapping card in
                    any cooperated car parks. Autopayment will be charged from
                    your registered card. Nothing needs to worry about as we
                    will handle everything for you.
                  </Typography>
                </CardContent>
              </Card>
              <Card className={classes.card}>
                <CardContent>
                  <Filter3Icon fontSize="large" color="primary" />
                  <Typography variant="h6">Save</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Cooperate with shops and restaurants not limited to those in
                    malls. Earn vouchers and parking discount along the way. You
                    can now save wherever you park.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Container>
        </TabPane>
        <TabPane tab="For companies in the industry" key="industry">
          <Container>
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              pt={2}
              mb={6}
              id="features"
            >
              <Card className={classes.card}>
                <CardContent>
                  <Filter1Icon fontSize="large" color="primary" />
                  <Typography variant="h6">Contact for Cooperation</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Contact us to share more information of your existing
                    parking system
                  </Typography>
                </CardContent>
              </Card>
              <Card className={classes.card}>
                <CardContent>
                  <Filter2Icon fontSize="large" color="primary" />
                  <Typography variant="h6">Implementation</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Ideally setup secured APIs/Messageing protocal to
                    communicate between ours and your existing system for your
                    minimal effort
                  </Typography>
                </CardContent>
              </Card>
              <Card className={classes.card}>
                <CardContent>
                  <Filter3Icon fontSize="large" color="primary" />
                  <Typography variant="h6">Test</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Fully test the system to make sure everthing are running
                    smooth as expected then here you go!
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Container>
        </TabPane>
      </Tabs>
    );
  }
}

export default withStyles(styles)(HowTo);
