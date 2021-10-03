import React from "react";
import FlexGrid from "@tds/core-flex-grid";
import Heading from "@tds/core-heading";
import Box from "@tds/core-box";
import Image from "@tds/core-image";
import Card from "@tds/core-card";
import ButtonLink from "@tds/core-button-link";
import A11yContent from "@tds/core-a11y-content";
import iphoneImage from "../../../../public/images/iphone.jpg";
import watchImage from "../../../../public/images/watch.jpg";

/**
 * Home page that shows two cards with links to go to watches/iphones page.
 * @returns
 */
const Home = () => {
  return (
    <FlexGrid>
      <Box vertical={6}>
        <FlexGrid.Row>
          <FlexGrid.Col xs={12} md={6}>
            <Card variant="defaultWithBorder">
              <FlexGrid.Row horizontalAlign="center">
                <Box between={2} vertical={3}>
                  <Heading level="h1">iPhones</Heading>
                </Box>
              </FlexGrid.Row>
              <FlexGrid.Row horizontalAlign="center">
                <Image
                  src={iphoneImage}
                  width={191}
                  height={238}
                  alt="Image of a watch"
                />
              </FlexGrid.Row>
              <FlexGrid.Row horizontalAlign="center">
                <Box vertical={5} between={1}>
                  <ButtonLink href="/iphones">
                    <span>
                      Shop <A11yContent>iPhones</A11yContent>Now
                    </span>
                  </ButtonLink>
                </Box>
              </FlexGrid.Row>
            </Card>
          </FlexGrid.Col>
          <FlexGrid.Col xs={12} md={6}>
            <Card variant="defaultWithBorder">
              <FlexGrid.Row horizontalAlign="center">
                <Box between={2} vertical={3}>
                  <Heading level="h1">Watches</Heading>
                </Box>
              </FlexGrid.Row>
              <FlexGrid.Row horizontalAlign="center">
                <Image
                  src={watchImage}
                  width={191}
                  height={238}
                  alt="Image of a watch"
                />
              </FlexGrid.Row>
              <FlexGrid.Row horizontalAlign="center">
                <Box vertical={5} between={1}>
                  <ButtonLink href="/watches">
                    <span>
                      Shop <A11yContent>watches</A11yContent>Now
                    </span>
                  </ButtonLink>
                </Box>
              </FlexGrid.Row>
            </Card>
          </FlexGrid.Col>
        </FlexGrid.Row>
      </Box>
    </FlexGrid>
  );
};

export default Home;
