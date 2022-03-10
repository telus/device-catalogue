import React from "react";
import PropTypes from "prop-types";
import Box from "@tds/core-box";
import Text from "@tds/core-text";
import FlexGrid from "@tds/core-flex-grid";
import phoneImage from "../../../../../public/images/iphone.jpg";
import watchImage from "../../../../../public/images/watch.jpg";
import DeviceCard from "../DeviceCard";

const DeviceGrid = ({ devices, deviceType }) => {
  if (!devices) {
    return (
      <Box inset={4}>
        <FlexGrid>
          <FlexGrid.Row>
            <Text>No devices found</Text>
          </FlexGrid.Row>
        </FlexGrid>
      </Box>
    );
  }
  const deviceImage = deviceType === "iphone" ? phoneImage : watchImage;

  return (
    <Box inset={0}>
      <FlexGrid>
        <FlexGrid.Row horizontalAlign="center">
          {devices.map((device, index) => {
            return (
              <FlexGrid.Col key={`device-${index}`} xs={12} md={3}>
                <DeviceCard
                  device={device}
                  image={deviceImage}
                  imageAlt="Image of an IPhone"
                />
              </FlexGrid.Col>
            );
          })}
        </FlexGrid.Row>
      </FlexGrid>
    </Box>
  );
};

DeviceGrid.propTypes = {
  devices: PropTypes.arrayOf(PropTypes.object),
  deviceType: PropTypes.string.isRequired,
};

export default DeviceGrid;
