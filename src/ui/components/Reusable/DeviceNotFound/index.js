import React from 'react';
import Heading from '@tds/core-heading';

const DeviceNotFound = () => {
  return (
    <div className="not-found">
      <Heading level="h1">
        Looks like the devices requested cannot be found.
      </Heading>
      <br/>
    </div>
  )
}

export default DeviceNotFound;
