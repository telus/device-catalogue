import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Box from "@tds/core-box";
import Heading from "@tds/core-heading";
import HairlineDivider from "@tds/core-hairline-divider";
import Paragraph from "@tds/core-paragraph";
import Text from "@tds/core-text";
import Spinner from "@tds/core-spinner";
import Notification from "@tds/core-notification";
import FlexGrid from "@tds/core-flex-grid";
import Image from "@tds/core-image";
import DimpleDivider from "@tds/core-dimple-divider";
import ButtonLink from "@tds/core-button-link";

import { useFetchData } from "../../../api/hooks";

import DeviceGrid from "../../common/DeviceGrid";
import telusImage from "../../../../../public/images/TELUS_TAGLINE_HORIZONTAL_EN.svg";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DevicePage = ({
  title,
  subtitle,
  deviceType,
  extraHeading,
  breadcrumbs,
  fetchDataFunction,
}) => {
  const [data, isLoading, hasError] = useFetchData(fetchDataFunction);

  return (
    <>
      <FlexGrid>
        <FlexGrid.Row>
          <FlexGrid.Col xs={12}>
            <Box vertical={4} between={3}>
              <Link to="/">
                <Image src={telusImage} width={150} height={50} alt="TELUS" />
              </Link>
              <HairlineDivider />
              {breadcrumbs}
              <HairlineDivider />
              <HeaderContainer>
                <Heading level="h1">{title}</Heading>
                {extraHeading}
              </HeaderContainer>
              <Paragraph>{subtitle}</Paragraph>
              <DimpleDivider />
            </Box>
          </FlexGrid.Col>
        </FlexGrid.Row>
      </FlexGrid>
      <Spinner
        spinning={isLoading}
        label={<span>Loading devices. Please wait.</span>}
      >
        {hasError ? (
          <FlexGrid>
            <FlexGrid.Row>
              <FlexGrid.Col xs={12}>
                <Notification variant="error" copy="en">
                  <Text bold>
                    Unable to retrieve the device list at this moment.
                  </Text>
                </Notification>
              </FlexGrid.Col>
            </FlexGrid.Row>
          </FlexGrid>
        ) : (
          <DeviceGrid devices={data} deviceType={deviceType} />
        )}
      </Spinner>
    </>
  );
};

DevicePage.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  deviceType: PropTypes.string.isRequired,
  breadcrumbs: PropTypes.object,
  extraHeading: PropTypes.object,
  fetchDataFunction: PropTypes.func.isRequired,
};

export default DevicePage;
