import React from "react";
import { Container, Divider, Paper } from "@material-ui/core";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Subscribe from "../components/Subscribe";
import Features from "../components/Features";
import HowTo from "../components/HowTo";
import About from "../components/About";
// import background from "../assets/img/bg.png";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        // style={{
        //   backgroundImage: `url(${background})`,
        //   backgroundAttachment: "fixed",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <Banner />
        <Container>
          <Paper elevation={2}>
            
            <Features />
            <About />
            <HowTo />
            <Divider />
            <Contact />
            <Divider />
            <Subscribe />
          </Paper>
        </Container>
      </div>
    );
  }
}

export default Main;
