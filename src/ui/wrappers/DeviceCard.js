import React from 'react';
import Heading from '@tds/core-heading';
import Box from '@tds/core-box';
import PriceLockup from '@tds/core-price-lockup';
import Paragraph from '@tds/core-paragraph';
import Image from '@tds/core-image';
import Card from '@tds/core-card';
import HairlineDivider from '@tds/core-hairline-divider';

const DeviceCard = ({ name, brand, price, image }) => (
  <Card variant="defaultWithBorder">
    <Image src={image} width={158} height={200} alt="iPhone" />
    <Box vertical={2} style={{ textAlign: 'left' }}>
      <Heading level="h3" tag="h2">
        {brand}
      </Heading>
      <Paragraph size="large">{name}</Paragraph>
    </Box>
    <PriceLockup size="small" price={price} signDirection="left" />
    <Box vertical={4}>
      <HairlineDivider />
    </Box>
    <Paragraph size="medium">
      TELUS Easy Payment and Bring-It-Back applied. Read legal footnote Taxes
      due upfront.
    </Paragraph>
  </Card>
);

export default DeviceCard;
