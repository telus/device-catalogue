import React from "react";
import Heading from "@tds/core-heading";
import FlexGrid from "@tds/core-flex-grid";
import Box from "@tds/core-box";
import ButtonLink from "@tds/core-button-link";
import Text from "@tds/core-text";


/**
 * Not Found component
 * @returns {JSX.Element}
 */
const NotFound = () => {
  return (
    <Box vertical={8}>
      <FlexGrid >
        <FlexGrid.Row horizontalAlign="center">
          <FlexGrid.Col xs={12} md={6}>
            <Box vertical={4}>
              <Heading level="h1">Looks like something went wrong.</Heading>
              <Text>
                A 404 error isn’t what you want, let’s get you back on track.
              </Text>
            </Box>
          </FlexGrid.Col>
        </FlexGrid.Row>
        <FlexGrid.Row horizontalAlign="center">
          <FlexGrid.Col xs={12}>
            <ButtonLink href="/">Return to Device Catalog page</ButtonLink>
          </FlexGrid.Col>
        </FlexGrid.Row>
      </FlexGrid>
    </Box>
  );
};

export default NotFound;
