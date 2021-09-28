import React, { Fragment } from 'react';
import Link from '../Common/LinkComponent';
import Heading from '@tds/core-heading';
import TdsLink from '@tds/core-link';

const PageNotFound = () => {
  return (
    <Fragment>
      <div className="header-text">
        <Heading level="h1">404-Error</Heading>
      </div>
      <div className="info-text">
        <Heading level="h3">Sorry the page is currently unavailable</Heading>
        <Link TDSLink={TdsLink} to="/">Return</Link>
      </div>
    </Fragment>
  );
}

export default PageNotFound;