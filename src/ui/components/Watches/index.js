import React from "react";
import Heading from "@tds/core-heading";
import Box from "@tds/core-box";
import Paragraph from "@tds/core-box";
import HairlineDivider from "@tds/core-hairline-divider";
import Spinner from "@tds/core-spinner";
import A11yContent from "@tds/core-a11y-content";
import FlexGrid from "@tds/core-flex-grid";
import Breadcrumbs from "@tds/core-breadcrumbs";
import Notification from "@tds/core-notification";
import Image from "@tds/core-image";
import Text from "@tds/core-text";
import { getWatches } from "../../api/watch";
import { useFetchData } from "../../api/hooks";
import DeviceGrid from "../common/DeviceGrid";
import telusImage from "../../../../public/images/TELUS_TAGLINE_HORIZONTAL_EN.svg";

const Watches = () => {
  const [data, isLoading, hasError] = useFetchData(getWatches);

  return (
    <>
      <FlexGrid>
        <FlexGrid.Row>
          <FlexGrid.Col xs={12}>
            <Box vertical={4} between={3}>
              <Image src={telusImage} width={150} height={50} alt="TELUS"/>
              <HairlineDivider />
              <Breadcrumbs>
                <Breadcrumbs.Item href="/">Device Catalog</Breadcrumbs.Item>
                <Breadcrumbs.Item href="/watches">Watches</Breadcrumbs.Item>
              </Breadcrumbs>
              <HairlineDivider />
              <Heading level="h1">Watches</Heading>
              <Paragraph>
                All watches - even the latest releases - are now $0 upfront.
              </Paragraph>
            </Box>
          </FlexGrid.Col>
        </FlexGrid.Row>
      </FlexGrid>
      <Spinner
        spinning={isLoading}
        label={
          <span>
            Loading <A11yContent>Watches list</A11yContent>. Please wait.
          </span>
        }
      >
        {hasError ? (
          <FlexGrid>
            <FlexGrid.Row>
              <FlexGrid.Col xs={12}>
                <Notification variant="error" copy="en">
                  <Text bold>
                    Unable to retrieve the Watches list at this moment.
                  </Text>
                </Notification>
              </FlexGrid.Col>
            </FlexGrid.Row>
          </FlexGrid>
        ) : (
          <DeviceGrid devices={data} deviceType="watch" />
        )}
      </Spinner>
    </>
  );
};

export default Watches;
