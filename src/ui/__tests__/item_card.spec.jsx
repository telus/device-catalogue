import React from 'react';
import renderer from 'react-test-renderer';
import ItemCard from '../components/Common/ItemCard';

describe('Item card', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ItemCard brand={"Apple"} name={"iPhone12"} price={121} image={''} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders when not passed all props', () => {
    const tree = renderer
      .create(<ItemCard brand={"Apple"} name={"iPhone12"} price={121} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});