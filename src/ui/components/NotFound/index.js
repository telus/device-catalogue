import React from 'react';
import Heading from '@tds/core-heading';
import Box from '@tds/core-box';
import PageContainer from '../../wrappers/PageContainer';
import Link from '../../wrappers/LinkWrapper';

const NotFound = () => (
  <main>
    <PageContainer>
      <section>
        <Heading level="h1">Looks like something went wrong.</Heading>
        <Box vertical={4}>
          <Link button to="/">
            Return to homepage
          </Link>
        </Box>
      </section>
    </PageContainer>
  </main>
);

export default NotFound;
