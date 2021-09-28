import React from 'react';
import FlexGrid from '@tds/core-flex-grid';
import ItemCard from './ItemCard';

const ItemGrid = ({ deviceData, deviceImage }) => {
  return (
    <FlexGrid>
      <FlexGrid.Row>
        {
          deviceData.map((device, index) => {
            const { brand, name, price } = device;
            return (
              <FlexGrid.Col key={index} xs={12} md={4} className="grid-column">
                <ItemCard brand={brand} name={name} price={price} image={deviceImage} />
              </FlexGrid.Col>
            )
          })
        }
      </FlexGrid.Row>
    </FlexGrid>
  )
}
export default ItemGrid;