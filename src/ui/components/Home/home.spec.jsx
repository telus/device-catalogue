import React from "react";
import { render } from "enzyme";
import Home from ".";
import { MemoryRouter } from "react-router-dom";

describe("Device Catalog", () => {
  it("renders correctly", () => {
    const container = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(container.html()).toMatchSnapshot();
    expect(container.find("img").length).toEqual(3);
    expect(container.html().includes("Device Catalog")).toEqual(true);
    expect(container.html().includes("iPhones")).toEqual(true);
    expect(container.find('a[href="/iphones"]').length).toEqual(1);
    expect(container.html().includes("Watches")).toEqual(true);
    expect(container.find('a[href="/watches"]').length).toEqual(1);
  });
});
