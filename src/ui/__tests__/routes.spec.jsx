import React from "react";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import App from "../components/App";
import Home from "../components/Home";
import IPhones from "../components/IPhones";
import Watches from "../components/Watches";
import NotFound from "../components/NotFound";

// This fixes issue reported in https://github.com/enzymejs/enzyme/issues/2073. 
// Mounted wrapper was not wrapped in act(...) warning
const waitForComponentToPaint = async (wrapper) => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    wrapper.update();
  });
};

describe("Application routes", () => {
  it("should render a Home component", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(Home)).toHaveLength(1);
  });

  it("should render an Iphones component", async () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/iphones"]}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.exists).toBeTruthy();
    await waitForComponentToPaint(wrapper);

    expect(wrapper.find(IPhones)).toHaveLength(1);
  });

  it("should render a Watches component", async () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/watches"]}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.exists).toBeTruthy();
    await waitForComponentToPaint(wrapper);

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
