import React from 'react';
import Heading from '@tds/core-heading';
import PageContainer from '../../wrappers/PageContainer';
import FlexGrid from '@tds/core-flex-grid';
import Box from '@tds/core-box';
import Image from '@tds/core-image';
import Card from '@tds/core-card';
import LinkWrapper from '../../wrappers/LinkWrapper';
import A11yContent from '@tds/core-a11y-content';
import iphoneImage from '../../../../public/images/iphone.jpg';
import watchImage from '../../../../public/images/watch.jpg';

const Home = () => (
  <main>
    <PageContainer>
      <section>
        <Heading level="h1">Device Catalogue</Heading>
        <Box vertical={5}>
          <FlexGrid>
            <FlexGrid.Row horizontalAlign="center">
              <FlexGrid.Col md={4}>
                <Box below={4}>
                  <Card variant="defaultWithBorder">
                    <FlexGrid.Row horizontalAlign="center">
                      <Heading level="h2">iPhones</Heading>
                    </FlexGrid.Row>
                    <FlexGrid.Row horizontalAlign="center">
                      <Box vertical={4}>
                        <Image
                          src={iphoneImage}
                          width={158}
                          height={200}
                          alt="iPhone"
                        />
                      </Box>
                    </FlexGrid.Row>
                    <FlexGrid.Row horizontalAlign="center">
                      <LinkWrapper button to="/iphones">
                        <span>
                          Shop <A11yContent>iPhones</A11yContent>Now
                        </span>
                      </LinkWrapper>
                    </FlexGrid.Row>
                  </Card>
                </Box>
              </FlexGrid.Col>
              <FlexGrid.Col md={4}>
                <Box below={4}>
                  <Card variant="defaultWithBorder">
                    <FlexGrid.Row horizontalAlign="center">
                      <Heading level="h2">Watches</Heading>
                    </FlexGrid.Row>
                    <FlexGrid.Row horizontalAlign="center">
                      <Box vertical={4}>
                        <Image
                          src={watchImage}
                          width={160}
                          height={200}
                          alt="watch"
                        />
                      </Box>
                    </FlexGrid.Row>
                    <FlexGrid.Row horizontalAlign="center">
                      <LinkWrapper button to="/watches">
                        <span>
                          Shop <A11yContent>watches</A11yContent>Now
                        </span>
                      </LinkWrapper>
                    </FlexGrid.Row>
                  </Card>
                </Box>
              </FlexGrid.Col>
            </FlexGrid.Row>
          </FlexGrid>
        </Box>
      </section>
    </PageContainer>
  </main>
);

export default Home;
