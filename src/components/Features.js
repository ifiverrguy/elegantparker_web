import React from "react";
import { Box } from "@material-ui/core";
import FeatureCard from "./FeatureCard";
import cardIcon from "../assets/img/feature.png";
import cardIcon2 from "../assets/img/feature2.png";
import cardIcon3 from "../assets/img/feature3.png";
import cardIcon4 from "../assets/img/feature4.png";
import cardIcon5 from "../assets/img/feature5.png";

class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        pt={10}
        mb={1}
        id="features"
      >
        <FeatureCard
          imgPath={cardIcon}
          title="One profile all the way"
          description="​Every car owner will only require a single profile to experience all features in any cooperated car parks"
        />
        <FeatureCard
          imgPath={cardIcon2}
          title="Parking space monitor"
          description="Car owner can have real-time monitor all car park availabilities so they can make up their best plan"
        />
        <FeatureCard
          imgPath={cardIcon3}
          title="Vision-based recognition"
          description="Provide secure and accurate tapping-free entry/exit which allow users to enjoy the amazing parking experience even in car parks that are not pre-installed with such system"
        />
        <FeatureCard
          imgPath={cardIcon4}
          title="Auto-payment"
          description="Balance deducted from user’s registered card upon exit. Nothing need to worry just leave elegantly"
        />
        <FeatureCard
          imgPath={cardIcon5}
          title="Saving while parking"
          description="Cooperate with nearby (street/mall) shops and restaurants to provide parking discounts or reverse. Yes! It is not only the mall's parking have spending rewards"
        />
      </Box>
    );
  }
}

export default Features;
