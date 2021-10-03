import React from "react";
import { render } from "enzyme";
import Home from "../components/Home";

describe("Device Card", () => {
  it("renders correctly with props", () => {
    const container = render(<Home />);

    expect(container.html()).toMatchSnapshot();
    expect(container.find("img").length).toEqual(2);
    expect(container.html().includes("a")).toEqual(true);
  });
});
