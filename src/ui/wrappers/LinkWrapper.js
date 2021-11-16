import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import TdsLink from '@tds/core-link';

const LinkWrapper = ({ children, ...rest }) => (
  <TdsLink
    {...rest}
    reactRouterLinkComponent={rest.to ? ReactRouterLink : undefined}
  >
    {children}
  </TdsLink>
);

export default LinkWrapper;
