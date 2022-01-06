import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CSSReset from '@tds/core-css-reset'
import Heading from "@tds/core-heading";
import FlexGrid from "@tds/core-flex-grid";
import Box from "@tds/core-box";
import Image from "@tds/core-image";
import Paragraph from "@tds/core-paragraph";
import DimpleDivider from "@tds/core-dimple-divider";
import Footnote from "../Footnote";
import DisplayHeading from "@tds/core-display-heading";
import IphonesLayout from "../IPhones";
import WatchesLayout from "../Watches";

const Home = () => {
  return (
    <Router>
      <CSSReset/>
      <Switch>
        <Route exact path="/">
          <React.Fragment>
            <DisplayHeading>Device Catalogue Showtime!</DisplayHeading>
            <div className="home-iphone">
              <FlexGrid>
                <FlexGrid.Row>
                  <FlexGrid.Col xs={12} md={4}>
                    <Image
                      src={
                        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-gold-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1631652956000"
                      }
                      width={200}
                      height={100}
                      alt="iPhone 13"
                    />
                  </FlexGrid.Col>
                  <FlexGrid.Col xs={12} md={5}>
                    <Box between={3}>
                      <Heading level="h2">
                        Get up to $520 off iPhone 13 with Bring‑It‑Back
                      </Heading>
                      <Paragraph>
                        Enjoy iPhone 11 for just $20 per month on a two-year
                        term when you choose Bring‑It‑Back Read. Offer available
                        for a limited time only.
                      </Paragraph>
                      <div>
                        <Link to="/iphones">Browse more iPhones</Link>
                      </div>
                    </Box>
                  </FlexGrid.Col>
                </FlexGrid.Row>
              </FlexGrid>
            </div>
            <DimpleDivider />
            <div className="home-watch">
              <FlexGrid>
                <FlexGrid.Row>
                  <FlexGrid.Col xs={12} md={4}>
                    <Image
                      src={
                        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/F02W3?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1614983429000"
                      }
                      width={200}
                      height={100}
                      alt="iPhone 11"
                    />
                  </FlexGrid.Col>
                  <FlexGrid.Col xs={12} md={5}>
                    <Box between={3}>
                      <Heading level="h2">
                        Get up to $520 off Apple watches with Bring‑It‑Back
                      </Heading>
                      <Paragraph>
                        Enjoy the all new Apple watches for just $20 per month
                        on a two-year term when you choose Bring‑It‑Back Read.
                        Offer available for a limited time only.
                      </Paragraph>
                      <div>
                        <Link to="/watches">Browse more Apple watches</Link>
                      </div>
                    </Box>
                  </FlexGrid.Col>
                </FlexGrid.Row>
              </FlexGrid>
            </div>
            <DimpleDivider />
            <div className="footer-text">
              <Link to="https://www.telus.com/en/mobility" invert>
                <Footnote />
              </Link>
            </div>
          </React.Fragment>
        </Route>
        <Route path="/iphones">
          <IphonesLayout />
        </Route>
        <Route path="/watches">
          <WatchesLayout />
        </Route>
      </Switch>
    </Router>
  );
};
export default Home;
