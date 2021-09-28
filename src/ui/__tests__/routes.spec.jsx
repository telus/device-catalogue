import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {mount, configure} from 'enzyme';
import App from '../components/App';
import NotFound from '../components/NotFound';


describe('Application routes', () => {
  jest.mock('../components/Home', ()=>{
    return <div></div>;
  });
  
  it('should render a NotFound component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/404']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find('NotFound')).toHaveLength(1);
  });

  it('should render a Home component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find('Home')).toHaveLength(1);
  });

  it('should render an IphoneCatalogue component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/iphones']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find('IphoneCatalogue')).toHaveLength(1);
  });

  it('should render an WatchesCatalogue component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/watches']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find('WatchesCatalogue')).toHaveLength(1);
  });
});
