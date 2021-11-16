import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import TdsLink from '@tds/core-link';
import TdsButtonLink from '@tds/core-button-link';

const LinkWrapper = ({ children, ...rest }) => {
  if (rest.button) {
    return (
      <TdsButtonLink
        {...rest}
        reactRouterLinkComponent={rest.to ? ReactRouterLink : undefined}
      >
        {children}
      </TdsButtonLink>
    );
  }

  return (
    <TdsLink
      {...rest}
      reactRouterLinkComponent={rest.to ? ReactRouterLink : undefined}
    >
      {children}
    </TdsLink>
  );
};

export default LinkWrapper;
