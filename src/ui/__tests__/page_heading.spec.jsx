import React from 'react';
import PageHeading from '../components/PageHeading';
import { render } from '@testing-library/react';



test("Should render a PageHeading component", () => {
  render(<PageHeading/>);
});
