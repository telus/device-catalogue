import React from 'react';
import renderer from 'react-test-renderer';
import DeviceCardGroup from '../components/Reusable/DeviceCardGroup';
import DeviceNotFound from '../components/Reusable/DeviceNotFound';
import axios from 'axios';
const data = axios.get("http://localhost:8081/watches/").then(res => {
  return res.data.data;
});

describe('Device card group', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<DeviceCardGroup data={data} img={''}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders 404 if the data is corrupted', () => {
    const tree = renderer
      .create(<DeviceNotFound/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
