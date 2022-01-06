import React from "react";
import FlexGrid from "@tds/core-flex-grid";
import Heading from "@tds/core-heading";
import Card from "@tds/core-card";
import PriceLockup from "@tds/core-price-lockup";
import Text from "@tds/core-text";
import Image from "@tds/core-image";
import Button from "@tds/core-button";
import ChevronLink from "@tds/core-chevron-link";
import Box from "@tds/core-box";
import DimpleDivider from "@tds/core-dimple-divider";

export default function DeviceCardItem(props) {
  return (
    <div className="device-card_item">
      <FlexGrid>
        <FlexGrid.Row>
          <FlexGrid.Col xs={12} md={5}>
            <Card variant="defaultWithBorder">
              <Box between={3}>
                <Image
                  src={props.url}
                  width={200}
                  height={100}
                  alt="iPhone 13"
                />
                <Heading level="h3">{props.brand}</Heading>
                <Heading level="h2" tag="h3">{props.name}</Heading>
                <PriceLockup
                  size="medium"
                  price={props.price}
                  bottomText="TELUS Easy Payment and Bring-It-Back applied. Read legal footnote. Taxes due upfront."
                  signDirection="left"
                />
                <br />
                <Text size="medium">Retail price: $470</Text>
                <Button>Add to cart</Button>
                <ChevronLink href="#">Learn more</ChevronLink>
              </Box>
            </Card>
          </FlexGrid.Col>
        </FlexGrid.Row>
      </FlexGrid>
      <DimpleDivider />
    </div>
  );
}
