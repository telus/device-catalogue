import React from "react";
import Card from "@tds/core-card";
import Box from "@tds/core-box";
import Heading from "@tds/core-heading";
import Image from "@tds/core-image";
import PriceLockup from "@tds/core-price-lockup";
import HairlineDivider from "@tds/core-hairline-divider";
import Paragraph from "@tds/core-paragraph";
import styled from "styled-components";
import { colorTelusPurple } from "@tds/core-colours";

const DeviceName = styled.span`
  font-weight: 400;
  color: ${colorTelusPurple};
  font-size: 1.3rem;
  line-height: 1.29;
  letter-spacing: -0.8px;
`;

const DeviceCard = ({ device, image, imageAlt = "Device image" }) => {
  if (!device) {
    return null;
  }

  return (
    <Box vertical={3}>
      <Card variant="defaultWithBorder" spacing="narrow">
        <Box between={2}>
          <Box horizontal={5}>
            <Image src={image} alt={imageAlt} width={200} height={300} />
          </Box>
          <Heading level="h3" tag="span">
            {device.brand}
          </Heading>
          <DeviceName>{device.name}</DeviceName>
          <PriceLockup
            size="small"
            price={device.price.toString()}
            signDirection="left"
          />
        </Box>
        <Box vertical={4} between={4}>
          <HairlineDivider />
          <Paragraph>
            TELUS Easy Payment and Bring-It-Back applied. Read legal footnote
            Taxes due upfront.
          </Paragraph>
        </Box>
      </Card>
    </Box>
  );
};

export default DeviceCard;
