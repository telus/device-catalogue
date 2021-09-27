import React from 'react';
import Heading from '@tds/core-heading';
import Image from '@tds/core-image';
import Card from '@tds/core-card';
import Box from '@tds/core-box';
import Link from '@tds/core-link';
import Paragraph from '@tds/core-paragraph';
import HairlineDivider from '@tds/core-hairline-divider';

const DeviceCard = ({ img, path, text, brand, name, price}) => {
  
  return (
    <div className="device-card">
      <Card fullHeight>
        <Box between={4}>
          <Link href={path}>
            <div className="device-image">
              <Image src={img} width={70} />
              <br/>
              {text}
            </div>
          </Link>
          { name}
          <br/>
          {brand}
          <br/>
          {price}
          {price &&
          <div>
            <HairlineDivider />
          <Paragraph size="small">
            TELUS Easy Payment and Bring-It-Back applied.
            <br/>
            Read legal footnote
            <br/>
            Taxes due upfront.
          </Paragraph>
          </div>}
        </Box>
      </Card>
    </div>
      
  )
}
export default DeviceCard;