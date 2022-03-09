import React from "react";
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
    <Box inset={4}>
      <FlexGrid>
        <FlexGrid.Row>
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

export default DeviceGrid;
