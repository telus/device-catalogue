import React from "react";
import { render } from "@testing-library/react";
import Home from "../components/Home";

describe("Home", () => {
  it("renders without crashing", () => {
    render(<Home/>);
  });
});
