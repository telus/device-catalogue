import React from "react";
import { Link } from "react-router-dom";
import Heading from "@tds/core-heading";
import Box from "@tds/core-box";
import Paragraph from "@tds/core-paragraph";
import Image from "@tds/core-image";
import HairlineDivider from "@tds/core-hairline-divider";
import FlexGrid from "@tds/core-flex-grid";
import DimpleDivider from "@tds/core-dimple-divider";
import phoneImage from "../../../../public/images/iphone.jpg";
import watchImage from "../../../../public/images/watch.jpg";
import telusImage from "../../../../public/images/TELUS_TAGLINE_HORIZONTAL_EN.svg";
import styled from "styled-components";

const CenteredText = styled.span`
  text-align: center;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
`;

const HoverEffectContainer = styled(Box)`
  img {
    transform: scale(1);
    transition: 0.5s ease-in-out;
    margin-bottom: 20px;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const DeviceLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
  return (
    <>
      <FlexGrid>
        <FlexGrid.Row>
          <FlexGrid.Col xs={12}>
            <Box between={3} vertical={4}>
              <Image src={telusImage} width={150} height={50} alt="TELUS" />
              <HairlineDivider />
              <Heading level="h1">Device Catalog</Heading>
              <Paragraph>Revolutionary devices at unbeatable prices.</Paragraph>
              <DimpleDivider />
            </Box>
          </FlexGrid.Col>
        </FlexGrid.Row>
        <FlexGrid.Row>
          <FlexGrid.Col xs={12}>
            <Box between={4}>
              <Box inline between={5} below={4}>
                <HoverEffectContainer between={3} horizontal={4}>
                  <DeviceLink to="/iphones">
                    <Image
                      src={phoneImage}
                      alt="iPhone image"
                      width={150}
                      height={250}
                    />
                    <CenteredText>iPhones</CenteredText>
                  </DeviceLink>
                </HoverEffectContainer>
                <HoverEffectContainer between={3} inline={false}>
                  <DeviceLink to="/watches">
                    <Image
                      src={watchImage}
                      alt="Watch image"
                      width={150}
                      height={250}
                    />
                    <CenteredText>Watches</CenteredText>
                  </DeviceLink>
                </HoverEffectContainer>
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
