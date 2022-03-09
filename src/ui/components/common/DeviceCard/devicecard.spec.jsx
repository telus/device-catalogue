import React from "react";
import { render } from "enzyme";
import watchImage from "../../../../../public/images/watch.jpg";
import DeviceCard from ".";

const watch = {
  name: "Apple Watch Series 3",
  brand: "Apple",
  price: 259,
};

describe("Device Card", () => {
  it("renders correctly with props", () => {
    const container = render(
      <DeviceCard device={watch} image={watchImage} imageAlt="Watch image" />
    );

    expect(container.html()).toMatchSnapshot();
    expect(container.find("img").length).toEqual(1);
    expect(container.html().includes("Apple Watch Series 3")).toEqual(true);
    expect(container.html().includes("$")).toEqual(true);
  });

  it("does not render if device is empty", () => {
    const container = render(
      <DeviceCard device={null} />
    );

    expect(container.html()).toMatchSnapshot();
    expect(container.find("img").length).toEqual(0);
    expect(container.html().includes("Apple Watch Series 3")).toEqual(false);
  });
});
