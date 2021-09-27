import React from 'react';
import FlexGrid from '@tds/core-flex-grid';
import DeviceCard from '../DeviceCard';
const DeviceCardGroup = ({ data, img }) => {

  return (
      <FlexGrid id="device-card-group">
        <FlexGrid.Row>
          {data.map((item, index) => {
              const { brand, name, price } = item;
              return (
                  <FlexGrid.Col key={index}>
                    <DeviceCard brand={brand} name={name} price={price} img={img} />
                  </FlexGrid.Col>
              )
            })
          }
        </FlexGrid.Row>
      </FlexGrid>
  )
}

export default DeviceCardGroup;