import React from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@tds/core-box';
import { colorTelusPurple } from '@tds/core-colours';
import HairlineDivider from '@tds/core-hairline-divider';
import Link from './LinkWrapper';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 0px 1rem;
  margin: 0px auto;
  max-width: 1300px;

  ul {
    display: flex;

    li {
      padding: calc(1.25rem);

      &.active {
        background: white;
      }

      a {
        text-decoration: none !important;
      }
    }
  }
`;

const pages = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/watches',
    name: 'Watches',
  },
  {
    path: '/iphones',
    name: 'iPhones',
  },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <Box style={{ background: colorTelusPurple }}>
      <NavContainer>
        <ul>
          {pages.map((page) => (
            <React.Fragment key={page.path}>
              <li className={location.pathname === page.path ? 'active' : ''}>
                <Link
                  invert={location.pathname === page.path ? false : true}
                  to={page.path}
                >
                  {page.name}
                </Link>
              </li>
              <HairlineDivider vertical gradient />
            </React.Fragment>
          ))}
        </ul>
      </NavContainer>
    </Box>
  );
};

export default Navbar;
