import React from 'react';
import Heading from '@tds/core-heading';

const ItemPageNotFound = ({ text }) => {
  return (
    <div className="info-text">
      <Heading level="h3">Sorry, no {text} found</Heading>
    </div>
  )
}

export default ItemPageNotFound;