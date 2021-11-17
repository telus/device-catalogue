import React from 'react';
import { render } from 'enzyme';
import DeviceCard from '../wrappers/DeviceCard';

describe('DeviceCard component', () => {
  it('user should see device image', () => {
    const image = 'device.jpg';
    const wrapper = render(<DeviceCard image={image} />);

    const imageSrc = wrapper.find('img').attr('src');

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('img').length).toEqual(1);
    expect(imageSrc).toBe(image);
  });

  it('user should see device information', () => {
    const wrapper = render(
      <DeviceCard name="P30 Lite" brand="HUAWEI" price="519.58" />
    );

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.text()).toMatch(/P30 Lite/i);
    expect(wrapper.text()).toMatch(/HUAWEI/i);
    expect(wrapper.text()).toMatch(/519.58/i);
  });
});
