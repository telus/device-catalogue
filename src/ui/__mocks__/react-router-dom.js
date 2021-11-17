import React from 'react';

const reactRouterDom = require('react-router-dom');
reactRouterDom.BrowserRouter = ({ children }) => <div>{children}</div>; // eslint-disable-line

module.exports = reactRouterDom;
