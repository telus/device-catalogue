import React from "react";
import FlexGrid from "@tds/core-flex-grid";
import Box from "@tds/core-box";
import DeviceCardItem from "./DeviceCard";

export default function DeviceCardGrid(props) {
  return (
    <FlexGrid>
      <FlexGrid.Row>
        {props.data.map((item, index) => {
          return (
            <FlexGrid.Col key={index}>
              <Box verical={4}>
                <DeviceCardItem
                  name={item.name}
                  brand={item.brand}
                  price={item.price}
                  url={props.url}
                />
              </Box>
            </FlexGrid.Col>
          );
        })}
      </FlexGrid.Row>
    </FlexGrid>
  );
}
