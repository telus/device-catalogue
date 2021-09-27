import React from 'react';
import Heading from '@tds/core-heading';
import Card from '@tds/core-card';
import Box from '@tds/core-box';
import Paragraph from '@tds/core-paragraph';
import PriceLockup from '@tds/core-price-lockup';
import Image from '@tds/core-image';
import HairlineDivider from '@tds/core-hairline-divider';

const ItemCard = ({ brand, name, price, image }) => {
  return (
    <Card fullHeight>
      <Box between={4}>
        <Image
          id="itemCard-img"
          src={image}
          alt={name}
          width={200}
        />
        <Heading level="h3" id="itemCard-brand">{brand}</Heading>
        <Heading level="h4" id="device-card-name">
          {name}
        </Heading>
        <PriceLockup
          id="device-card-price"
          size="small"
          price={price}
          topText="Starting at"
          signDirection="left"
        />
        <HairlineDivider />
        <Paragraph size="small">
          TELUS Easy Payment Applied.
          <br></br>
          Taxes due upfront.
        </Paragraph>
      </Box>
    </Card>
  )
}
export default ItemCard;