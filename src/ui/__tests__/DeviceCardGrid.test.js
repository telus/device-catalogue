import React from "react";
import { render } from "@testing-library/react";
import DeviceCardGrid from "../components/DeviceCardGrid";

describe("DeviceCardGrid", () => {
  const deviceData = [
    {
      key: 1,
      name: "iPhone 13",
      brand: "Apple",
      price: "500",
      url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-silver-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1631652954000",
    },
  ];

  it("renders without crashing", () => {
    render(<DeviceCardGrid data={deviceData} />);
  });
});
