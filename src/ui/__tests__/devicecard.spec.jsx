import React from "react";
import { mount, render } from "enzyme";
import DeviceCard from "../helpers/DeviceCard";
import image from "../../../public/images/iphone.jpg";
const device = {
  name: "iPhone SE",
  brand: "Apple",
  price: 599,
};

describe("Device Card", () => {
  it("renders correctly with props", () => {
    const container = render(<DeviceCard device={device} image={image} />);

    expect(container.html()).toMatchSnapshot();
    expect(container.find("img").length).toEqual(1);
    expect(container.html().includes("$")).toEqual(true);
  });
});
