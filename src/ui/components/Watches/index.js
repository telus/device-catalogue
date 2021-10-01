import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@tds/core-box";
import FlexGrid from "@tds/core-flex-grid";
import config from "../../../config.jsx";
import DeviceCard from "../../helpers/DeviceCard";
import watchImage from "../../../../public/images/watch.jpg";

const Watches = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    const getWatches = async () => {
      try {
        let watchesData = await axios.get(`${config.API_ENDPOINT}/watches`);
        setWatches(watchesData.data.data);
      } catch (e) {
        console.log(e);
      }
    };
    getWatches();
  }, []);

  return (
    <FlexGrid>
      <Box vertical={5}>
        <FlexGrid.Row>
          {watches.map((watch, index) => (
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
