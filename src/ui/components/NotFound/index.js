import React from 'react';
import Heading from '@tds/core-heading';
import NavBar from '../Reusable/NavBar';
import BrowseMoreLink from '../Reusable/BrowseMoreLink';
import Paragraph from '@tds/core-paragraph';
import Text from '@tds/core-text';
import ChevronLink from '@tds/core-chevron-link';
const NotFound = () => {
  return (
    <React.Fragment>
      <div className="display-heading">
        <Heading level="h1">404</Heading>
      </div>
      <NavBar/>
      <div className="not-found">
        <Heading level="h1">
          Looks like there was a problem serving the requested page.
        </Heading>
        <br/>
        <Paragraph>
          <Text>
            What would you like to do?
          </Text>
        </Paragraph>
      </div>
      <div className="not-found-help-link">
        <ChevronLink href="/">Return to Device Catalogue</ChevronLink>
        <br/>
        <ChevronLink href="https://www.telus.com/en/bc/support/contact-us">Contact us</ChevronLink>
      </div>
    </React.Fragment>

  )
}

export default NotFound;
