import React from 'react';
import ChevronLink from '@tds/core-chevron-link';
import Link from './LinkComponent';
import Button from '@tds/core-button';

const FooterLink = ({ path, text }) => {
  return (
    <div className="footer-link">
      <Button variant="brand"><Link TDSLink={ChevronLink} to={path}>{text}</Link></Button>
    </div>
  )
}

export default FooterLink;