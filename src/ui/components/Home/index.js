import React from "react";
import { Link } from "react-router-dom";
import Heading from "@tds/core-heading";
import Box from "@tds/core-box";
import Paragraph from "@tds/core-paragraph";
import Image from "@tds/core-image";
import HairlineDivider from "@tds/core-hairline-divider";
import FlexGrid from "@tds/core-flex-grid";
import phoneImage from "../../../../public/images/iphone.jpg";
import watchImage from "../../../../public/images/watch.jpg";
import telusImage from "../../../../public/images/TELUS_TAGLINE_HORIZONTAL_EN.svg";
import styled from "styled-components";

const CenteredText = styled.span`
  text-align: center;
`;

const Home = () => {
  return (
    <>
      <FlexGrid>
        <FlexGrid.Row>
          <FlexGrid.Col xs={12}>
            <Box between={3} vertical={4}>
              <Image src={telusImage} width={150} height={50} />
              <HairlineDivider />
              <Heading level="h1">Device Catalog</Heading>
              <Paragraph>Revolutionary devices at unbeatable prices.</Paragraph>
            </Box>
          </FlexGrid.Col>
        </FlexGrid.Row>
        <FlexGrid.Row>
          <FlexGrid.Col xs={12}>
            <Box between={3}>
              <Box inline between={3} below={4}>
                <Link to="/iphones">
                  <Box between={3} horizontal={4}>
                    <Image
                      src={phoneImage}
                      alt="iPhone image"
                      width={150}
                      height={250}
                    />
                    <CenteredText>iPhones</CenteredText>
                  </Box>
                </Link>
                <Link to="/watches">
                  <Box between={3} inline={false}>
                    <Image
                      src={watchImage}
                      alt="Watch image"
                      width={150}
                      height={250}
                    />
                    <CenteredText>Watches</CenteredText>
                  </Box>
                </Link>
              </Box>
              <HairlineDivider />
            </Box>
          </FlexGrid.Col>
        </FlexGrid.Row>
      </FlexGrid>
    </>
  );
};

export default Home;
