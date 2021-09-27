import React from 'react';
import Box from '@tds/core-box';
import Link from '@tds/core-link';
import HairlineDivider from '@tds/core-hairline-divider';

const NavBar = () => {
  return (
    <Box inset={3} className="nav-bar" inline between={3}>
      <Link href="http://localhost:8080"  invert>
        Home
      </Link>
      <HairlineDivider vertical />
      <Link href="http://localhost:8080/iphones"  invert>
        iPhones
      </Link>
      <HairlineDivider vertical />
      <Link href="http://localhost:8080/watches"  invert>
        Watches
      </Link>
    </Box>
  )
}
export default NavBar;