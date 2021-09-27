import React from 'react';
import FlexGrid from '@tds/core-flex-grid';
import DeviceCard from '../DeviceCard';

const DeviceCardGroup = ({ devices, img }) => {

  return (
    <FlexGrid>
      <FlexGrid.Row>
        {
          devices.map((device, index) => {
            const { brand, name, price } = device;
            return (
              <FlexGrid.Col key={index} xs={12} md={4} className="device-card-group">
                <DeviceCard brand={brand} name={name} price={price} image={img} />
              </FlexGrid.Col>
            )
          })
        }
      </FlexGrid.Row>
    </FlexGrid>
  )
}

export default DeviceCardGroup;