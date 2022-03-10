import React from "react";
import Box from "@tds/core-box";
import Heading from "@tds/core-heading";
import HairlineDivider from "@tds/core-hairline-divider";
import Paragraph from "@tds/core-paragraph";
import Text from "@tds/core-text";
import Spinner from "@tds/core-spinner";
import A11yContent from "@tds/core-a11y-content";
import Notification from "@tds/core-notification";
import FlexGrid from "@tds/core-flex-grid";
import Image from "@tds/core-image";
import Breadcrumbs from "@tds/core-breadcrumbs";
import { getIphones } from "../../api/iphone";
import { useFetchData } from "../../api/hooks";
import DeviceGrid from "../common/DeviceGrid";
import telusImage from "../../../../public/images/TELUS_TAGLINE_HORIZONTAL_EN.svg";

const IPhones = () => {
  const [data, isLoading, hasError] = useFetchData(getIphones);

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
                <Breadcrumbs.Item href="/iphones">iPhones</Breadcrumbs.Item>
              </Breadcrumbs>
              <HairlineDivider />
              <Heading level="h1">iPhones</Heading>
              <Paragraph>
                Apple iPhones offer millions of apps, games and features to
                enhance your work and personal life. Pair your new iPhone with
                Apple Watch and enjoy the health benefits of having a digital
                fitness partner with you every step of the way.
              </Paragraph>
            </Box>
          </FlexGrid.Col>
        </FlexGrid.Row>
      </FlexGrid>
      <Spinner
        spinning={isLoading}
        label={
          <span>
            Loading <A11yContent>iPhone list</A11yContent>. Please wait.
          </span>
        }
      >
        {hasError ? (
          <FlexGrid>
            <FlexGrid.Row>
              <FlexGrid.Col xs={12}>
                <Notification variant="error" copy="en">
                  <Text bold>
                    Unable to retrieve the iPhone list at this moment.
                  </Text>
                </Notification>
              </FlexGrid.Col>
            </FlexGrid.Row>
          </FlexGrid>
        ) : (
          <DeviceGrid devices={data} deviceType="iphone" />
        )}
      </Spinner>
    </>
  );
};

export default IPhones;
