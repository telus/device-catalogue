import React from 'react';
import ChevronLink from '@tds/core-chevron-link';
import Link from './LinkComponent';

const FooterLink = ({ path, text }) => {
  return (
    <div className="footer-link">
      <Link TDSLink={ChevronLink} to={path}>{text}</Link>
    </div>
  )
}

export default FooterLink;