import React, { useState, useEffect } from 'react';
//import Heading from '@tds/core-heading';
import DisplayHeading from '@tds/core-display-heading';
import NavBar from '../Reusable/NavBar';
import BrowseMoreLink from '../Reusable/BrowseMoreLink';
import DeviceCardGroup from '../Reusable/DeviceCardGroup';
import watchImg from '../../../../public/images/watch.jpg';
import axios from 'axios';
const WatchesCatalogue = () => {
  // async function getData() {
  //   try {
  //     const response = await axios.get('http://localhost:8081/watches/');
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  const [watchData, setWatchData] = useState([]);
  const [fetching, setFetching] = useState(true);

  // Fetch watch data from server then set into state
  useEffect(() => {
    axios.get("http://localhost:8081/watches/").then(res => {
      setWatchData(res.data.data);
      setFetching(false);
    }).catch(err => {
      console.log(err);
      setFetching(false);
    });
  }, []);
  console.log("watchData",watchData)
  return (
    <React.Fragment>
      <div className="display-heading"> 
        <DisplayHeading level="h1">Watches Catalogue</DisplayHeading>
      </div>
      <NavBar/>
      {/* <DeviceCardGroup data={} img={watchImg}/> */}
      <BrowseMoreLink path="/iphones" text="Check out the iPhones"/>
    </React.Fragment>
  )
}
export default WatchesCatalogue;
