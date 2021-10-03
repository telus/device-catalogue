import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@tds/core-box";
import { colorCardinal } from "@tds/core-colours";
import FlexGrid from "@tds/core-flex-grid";
import config from "../../../config.jsx";
import DeviceCard from "../../helpers/DeviceCard";
import iphoneImage from "../../../../public/images/iphone.jpg";

/**
 * IPhones page - displays a grid of iphones and their prices using a DeviceCard component
 * @returns a render of the iphones page
 */
const IPhones = () => {
  const [iphones, setIPhones] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getIPhones = async () => {
      try {
        setIsFetching(true);
        const iphonesData = await axios.get(`${config.API_ENDPOINT}/iphones`);
        setIPhones(iphonesData.data.data);
        setIsFetching(false);
      } catch (e) {
        setError(true);
        console.log(e);
      }
    };
    getIPhones();
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
            iphones.map((iphone, index) => (
              <FlexGrid.Col xs={12} md={4} key={index}>
                <DeviceCard device={iphone} image={iphoneImage} />
              </FlexGrid.Col>
            ))}
        </FlexGrid.Row>
      </Box>
    </FlexGrid>
  );
};

export default IPhones;
