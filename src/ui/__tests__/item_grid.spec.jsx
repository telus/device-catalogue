import React from 'react';
import ItemGrid from '../components/Common/ItemGrid';
import ItemCard from '../components/Common/ItemCard';
import { mount } from 'enzyme';

const testData = [
  {
    name: 'Apple Watch Series 6',
    brand: 'Apple',
    price: 529
  },
  {
    name: 'Apple Watch SE',
    brand: 'Apple',
    price: 369
  },
  {
    name: 'Apple Watch Series 3',
    brand: 'Apple',
    price: 259
  }
];

describe('Item grid', () => {
  it('displays the correct number of Item cards', () => {
    const wrapper = mount(<ItemGrid deviceData={testData} deviceImage={''} />);
    expect(wrapper.find(ItemCard)).toHaveLength(testData.length);
  });
});