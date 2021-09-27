import React from 'react';
import Heading from '@tds/core-heading';
import Image from '@tds/core-image';
import Card from '@tds/core-card';
import Box from '@tds/core-box';
import Link from '@tds/core-link';

const DeviceCard = ({ img, path, text }) => {
  
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
        </Box>
      </Card>
    </div>
      
  )
}
export default DeviceCard;