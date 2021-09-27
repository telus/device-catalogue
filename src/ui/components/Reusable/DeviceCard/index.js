import React from 'react';
import Heading from '@tds/core-heading';
import Image from '@tds/core-image';
import Card from '@tds/core-card';
import Box from '@tds/core-box';
import Link from '@tds/core-link';
import Paragraph from '@tds/core-paragraph';
import Strong from '@tds/core-strong';
import Text from '@tds/core-text';
import HairlineDivider from '@tds/core-hairline-divider';
import { FootnoteLink } from '@tds/core-terms-and-conditions';
import PriceLockup from '@tds/core-price-lockup';
const DeviceCard = ({ img, path, text, brand, name, price}) => {
  
  return (
    <div className="device-card">
      <Card fullHeight>
        <Box between={4}>
          {path
           ? <Link href={path}>
              <div className="device-image">
                <Image src={img} width={70} />
                <br/>
                {text}
              </div>
            </Link>
            :<div className="device-image"><Image src={img} width={70}/></div>
          }
          {price &&
          <React.Fragment>
            <Strong id="device-brand">{brand}</Strong>
            <Heading level="h4" id="device-name" >{name}</Heading>
            <PriceLockup
              size="small"
              price={price}
              signDirection="left"
            />
            <HairlineDivider/>
            <Paragraph size="small">
              <Text>
                TELUS Easy Payment and Bring-It-Back applied.
                <FootnoteLink number={4} />
                <br/>
                Taxes due upfront.
              </Text>
            </Paragraph>
          </React.Fragment>
          }
        </Box>
      </Card>
    </div>
  )
}
export default DeviceCard;