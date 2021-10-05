import React from 'react'
import ChevronLink from '@tds/core-chevron-link';

const BrowseMoreLink = ({ path, text }) => {
  return (
    <div className="browse-more">
      <ChevronLink href={path}>{text}</ChevronLink>
    </div>
    )
}
export default BrowseMoreLink;