import React from 'react';
import Heading from '@tds/core-heading';
import NavBar from '../Reusable/NavBar';
import BrowseMoreLink from '../Reusable/BrowseMoreLink';
import Paragraph from '@tds/core-paragraph';
import Text from '@tds/core-text';
import Strong from '@tds/core-strong';
const NotFound = () => {
  return (
    <React.Fragment>
      <div className="display-heading">
        <Heading level="h1">404</Heading>
      </div>
      <NavBar/>
      <div className="not-found">
        <Paragraph>
          <Strong>
            Oops!
          </Strong>
          <br/>
          <Text>
            404 - Page not found!
          </Text>
        </Paragraph>
      </div>
      <BrowseMoreLink path="/" text="Go to Device Catalogue"/>
    </React.Fragment>

  )
}

export default NotFound;
