import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@tds/core-box";
import { colorCardinal } from "@tds/core-colours";
import FlexGrid from "@tds/core-flex-grid";
import config from "../../../config.jsx";
import DeviceCard from "../../helpers/DeviceCard";
import watchImage from "../../../../public/images/watch.jpg";

/**
 * Watches page - displays a grid of watches and their prices using a DeviceCard component
 * @returns a render of the watches page
 */
const Watches = () => {
  const [watches, setWatches] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getWatches = async () => {
      try {
        setIsFetching(true);
        const watchesData = await axios.get(`${config.API_ENDPOINT}/watches`);
        setWatches(watchesData.data.data);
        setIsFetching(false);
      } catch (e) {
        setError(true);
        console.log(e);
      }
    };
    getWatches();
  }, []);

  const isFetchingView = () => {
    return <Box vertical={4}> Data is loading...</Box>;
  };

  const errorView = () => {
    return (
      <div style={{ color: colorCardinal }}>Sorry! Something went wrong.</div>
    );
  };
  return (
    <FlexGrid>
      <Box vertical={5}>
        <FlexGrid.Row>
          {isFetching && isFetchingView()}
          {error && errorView()}
          {!isFetching &&
            !error &&
            watches.map((watch, index) => (
              <FlexGrid.Col xs={12} md={4} key={index}>
                <DeviceCard device={watch} image={watchImage} />
              </FlexGrid.Col>
            ))}
        </FlexGrid.Row>
      </Box>
    </FlexGrid>
  );
};

export default Watches;
