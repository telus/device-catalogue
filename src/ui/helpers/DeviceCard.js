import React from "react";
import FlexGrid from "@tds/core-flex-grid";
import Heading from "@tds/core-heading";
import Box from "@tds/core-box";
import Image from "@tds/core-image";
import Card from "@tds/core-card";
import HairlineDivider from "@tds/core-hairline-divider";
import PriceLockup from "@tds/core-price-lockup";
import Paragraph from "@tds/core-paragraph";

/**
 * A component that renders a Telus device card with image, name and product info
 * @param {Object} device
 */
const DeviceCard = ({ device, image }) => {
  return (
    <Card>
      <FlexGrid.Row horizontalAlign="center">
        <Box vertical={4}>
          <Image
            src={image}
            alt={`Image of ${device.name}`}
            height={200}
            width={160}
          />
        </Box>
      </FlexGrid.Row>
      <Box vertical={3} between={1}>
        <Heading level="h3" tag="h2">
          {" "}
          {device.brand}
        </Heading>
        <Heading level="h2" tag="h3">
          {" "}
          {device.name}
        </Heading>
      </Box>
      <Box>
        <PriceLockup
          size="medium"
          price={`${device.price}`}
          signDirection="left"
        />
      </Box>
      <Box between={3} vertical={4}>
        <HairlineDivider />
        <Paragraph>
          TELUS Easy Payment and Bring-It-Back applied. Read legal footnote
          Taxes due upfront.{" "}
        </Paragraph>
      </Box>
    </Card>
  );
};
export default DeviceCard;
