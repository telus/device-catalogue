import React from "react";
import FlexGrid from "@tds/core-flex-grid";
import Box from "@tds/core-box";
import DeviceCardItem from "./DeviceCard";

export default function DeviceCardGrid(props) {
  const grid = props.data.map((item) => {
    return (
      <section>
        <FlexGrid>
          <FlexGrid.Row >
            <FlexGrid.Col>
              <Box verical={2}>
                <DeviceCardItem
                  key={props.data.indexOf(item)}
                  name={item.name}
                  brand={item.brand}
                  price={item.price}
                  url={props.url}
                />
              </Box>
            </FlexGrid.Col>
          </FlexGrid.Row>
        </FlexGrid>
      </section>
    );
  });
  return grid;
}
