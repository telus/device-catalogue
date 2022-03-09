import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import App from "../components/App";
import Home from "../components/Home";
import IPhones from "../components/IPhones";
import Watches from "../components/Watches";
import NotFound from "../components/NotFound";

describe("Application routes", () => {
  it("should render a Home component", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(Home)).toHaveLength(1);
  });

  it("should render an Iphones component", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/iphones"]}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(IPhones)).toHaveLength(1);
  });

  it("should render a Watches component", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/watches"]}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(Watches)).toHaveLength(1);
  });

  it("should render a NotFound component", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/asd", "/ggggg", "/404"]}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(NotFound)).toHaveLength(1);
  });
});
