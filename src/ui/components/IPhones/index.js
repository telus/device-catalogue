import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@tds/core-box";
import FlexGrid from "@tds/core-flex-grid";
import config from "../../../config.jsx";
import DeviceCard from "../../helpers/DeviceCard";
import iphoneImage from "../../../../public/images/iphone.jpg";

/**
 * iPhones page - displays a grid of watches and their prices using a DeviceCard component
 * @returns a render of the iPhones page
 */
const IPhones = () => {
  const [iphones, setIPhones] = useState([]);

  useEffect(() => {
    const getIPhones = async () => {
      try {
        let iphonesData = await axios.get(`${config.API_ENDPOINT}/iphones`);
        setIPhones(iphonesData.data.data);
      } catch (e) {
        console.log(e);
      }
    };
    getIPhones();
  }, []);

  return (
    <FlexGrid>
      <Box vertical={5}>
        <FlexGrid.Row>
          {iphones.map((iphone, index) => (
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
