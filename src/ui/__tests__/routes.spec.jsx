import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import App from '../components/App';
import Home from '../components/Home';
import Watches from '../components/Watches';
import IPhones from '../components/IPhones';
import NotFound from '../components/NotFound';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

describe('Application routes', () => {
  it('should render a Home component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });

  it('should render a Watches component', (done) => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/watches']}>
        <App />
      </MemoryRouter>
    );

    setImmediate(() => {
      wrapper.update();

      expect(wrapper.find(Watches)).toHaveLength(1);
      done();
    });
  });

  it('should render a IPhones component', (done) => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/iphones']}>
        <App />
      </MemoryRouter>
    );

    setImmediate(() => {
      wrapper.update();

      expect(wrapper.find(IPhones)).toHaveLength(1);
      done();
    });
  });

  it('should render a NotFound component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/404']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(NotFound)).toHaveLength(1);
  });
});
