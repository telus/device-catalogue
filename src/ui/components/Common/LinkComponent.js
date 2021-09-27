
//Component reference -> https://tds.telus.com/components/index.html#/Links?id=link
import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom';

const LinkComponent = ({ TDSLink, hasIcon, children, ...rest }) => (
  <TDSLink {...rest} reactRouterLinkComponent={rest.to ? ReactRouterLink : undefined}>
    {children}
  </TDSLink>
)

export default LinkComponent