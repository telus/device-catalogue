import React from "react";
import { render } from "enzyme";
import DeviceGrid from ".";

const iphones = [
  {
    name: "iPhone 12 Pro",
    brand: "Apple",
    price: 1399,
  },
  {
    name: "iPhone 12",
    brand: "Apple",
    price: 979,
  },
  {
    name: "iPhone SE",
    brand: "Apple",
    price: 599,
  },
];

const watches = [
  {
    name: "Apple Watch Series 6",
    brand: "Apple",
    price: 529,
  },
  {
    name: "Apple Watch SE",
    brand: "Apple",
    price: 369,
  },
  {
    name: "Apple Watch Series 3",
    brand: "Apple",
    price: 259,
  },
];

describe("Device Grid", () => {
  it("renders correctly with props for iphone devices", () => {
    const container = render(
      <DeviceGrid devices={iphones} deviceType="iphone" />
    );

    expect(container.html()).toMatchSnapshot();
    expect(container.find("img").attr("src").includes("iphone.jpg")).toEqual(
      true
    );
    expect(container.html().includes("iPhone 12")).toEqual(true);
  });

  it("renders correctly with props for watch devices", () => {
    const container = render(
      <DeviceGrid devices={watches} deviceType="watch" />
    );

    expect(container.html()).toMatchSnapshot();
    expect(container.find("img").attr("src").includes("watch.jpg")).toEqual(
      true
    );
    expect(container.html().includes("Apple Watch Series 6")).toEqual(true);
  });
});
