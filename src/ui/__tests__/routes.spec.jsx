import React from "react";
import wait from "waait";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { mount, configure } from "enzyme";
import App from "../components/App";
import Home from "../components/Home";
import Watches from "../components/Watches";
import IPhones from "../components/IPhones";
import NotFound from "../components/NotFound";

const waitForComponentToPaint = async (wrapper) => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
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

  it("should render a Watches component", async () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/watches"]}>
        <Watches />
      </MemoryRouter>
    );
    expect(wrapper.exists).toBeTruthy();
    await waitForComponentToPaint(wrapper);
    expect(wrapper.find(Watches)).toHaveLength(1);
  });

  it("should render a iPhones component", async () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/iphones"]}>
        <IPhones />
      </MemoryRouter>
    );
    expect(wrapper.exists).toBeTruthy();
    await waitForComponentToPaint(wrapper);
    expect(wrapper.find(IPhones)).toHaveLength(1);
  });

  it("should render a 404 page", () => {
    const wrapper = mount(
      <MemoryRouter
        await
        initialEntries={["/adkjskdj", "/ahello", "/some-device"]}
      >
        <NotFound />
      </MemoryRouter>
    );

    expect(wrapper.find(NotFound)).toHaveLength(1);
  });
});
