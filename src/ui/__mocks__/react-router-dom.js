import React from "react";

const reactRouterDom = require("react-router-dom");
// Mock to avoid colission with MemoryRouter when testing.
// Just render plain div with its children
reactRouterDom.BrowserRouter = ({ children }) => <div>{children}</div>;

module.exports = reactRouterDom;
