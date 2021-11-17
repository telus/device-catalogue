import React from 'react';
import { render } from 'enzyme';
import Home from '../components/Home';
import { StaticRouter } from 'react-router-dom';

describe('Home page', () => {
  it('should render page with 2 links', () => {
    const wrapper = render(
      <StaticRouter>
        <Home />
      </StaticRouter>
    );

    const hrefs = Object.values(
      wrapper.find('a').map((idx, el) => el.attribs.href)
    );

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('img').length).toEqual(2);
    expect(wrapper.text()).toMatch(/Device Catalogue/i);
    expect(hrefs).toContain('/iphones');
    expect(hrefs).toContain('/watches');
  });
});
