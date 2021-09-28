import React from 'react';
import renderer from 'react-test-renderer';
import DeviceCard from '../components/Reusable/DeviceCard'

describe('Device card', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<DeviceCard img={''} brand='Apple' name='iPhone12' price={121}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with just 2 props', () => {
    const tree = renderer
      .create(<DeviceCard text={'iPhones'} img={''} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});