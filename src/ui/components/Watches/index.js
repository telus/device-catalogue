import React, { useEffect, useState } from 'react';
import Heading from '@tds/core-heading';
import PageContainer from '../../wrappers/PageContainer';
import Box from '@tds/core-box';
import FlexGrid from '@tds/core-flex-grid';
import Notification from '@tds/core-notification';
import Spinner from '@tds/core-spinner';
import Text from '@tds/core-text';
import A11yContent from '@tds/core-a11y-content';
import DeviceCard from '../../wrappers/DeviceCard';
import ErrorBoundary from '../../wrappers/ErrorBoundary';
import watchImage from '../../../../public/images/watch.jpg';

const Watches = () => {
  const [devices, setDevices] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsFetching(true);

    fetch('http://localhost:8081/watches')
      .then((res) => res.json())
      .then(({ data }) => setDevices(data))
      .catch(() => setError(true))
      .finally(() => setIsFetching(false));
  }, []);

  return (
    <main>
      <PageContainer>
        <section>
          <Heading level="h1">Watches</Heading>
          <Box vertical={5}>
            <FlexGrid>
              <FlexGrid.Row horizontalAlign="center">
                {isFetching && (
                  <Spinner
                    spinning
                    label={
                      <>
                        Loading{' '}
                        <A11yContent>
                          the devices list. Please wait.
                        </A11yContent>
                      </>
                    }
                  />
                )}
                {error && (
                  <Notification variant="error" copy="en">
                    <Text bold>
                      Looks like there was a problem loading the devices.
                    </Text>{' '}
                    Please try reloading the page or coming back later.
                  </Notification>
                )}
                {devices.length > 0 &&
                  devices.map((device) => (
                    <FlexGrid.Col xs={12} sm={6} md={4} key={device.name}>
                      <Box below={4}>
                        <DeviceCard
                          brand={device.brand}
                          name={device.name}
                          price={device.price.toString()}
                          image={watchImage}
                        />
                      </Box>
                    </FlexGrid.Col>
                  ))}
              </FlexGrid.Row>
            </FlexGrid>
          </Box>
        </section>
      </PageContainer>
    </main>
  );
};

export default function WatchesWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Watches />
    </ErrorBoundary>
  );
}
