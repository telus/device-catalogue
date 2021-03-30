import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {mount, configure} from 'enzyme';
import App from '../components/App';
import Home from '../components/Home';
import NotFound from '../components/NotFound';

describe('Application routes', () => {
  it('should render a Home component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(Home)).toHaveLength(1);
  });
});
