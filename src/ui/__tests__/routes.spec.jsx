import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {mount, configure} from 'enzyme';
import App from '../components/App';
import Home from '../components/Home';
import Watches from '../components/Watches';
import Iphones from '../components/Iphones';
import NotFound from '../components/NotFound';
import PageProduct from '../components/PageProduct';

import {cleanup, fireEvent, render} from '@testing-library/react';


describe('Application  1  routes', () => {
  it('should render a Home component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Home />
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
  });

  // it('should render a Watches component', () => {
  //   const wrapper = mount(
  //     <MemoryRouter initialEntries={['/watches']}>
  //        <App />
  //     </MemoryRouter>
  //   );
  //   expect(wrapper.find(Watches)).toHaveLength(1);
  // });
  
/*
  it('should render a Iphones component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/iphones']}>
         <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Iphones)).toHaveLength(1);
  });


  it('should render a NotFound component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/*']}>
         <App />
      </MemoryRouter>
    );
    expect(wrapper.find(NotFound)).toHaveLength(1);
  });
  */

});  
