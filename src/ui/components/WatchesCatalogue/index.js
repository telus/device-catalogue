import React, { useState, useEffect } from 'react';
//import Heading from '@tds/core-heading';
import DisplayHeading from '@tds/core-display-heading';
import NavBar from '../Reusable/NavBar';
import BrowseMoreLink from '../Reusable/BrowseMoreLink';
import DeviceCardGroup from '../Reusable/DeviceCardGroup';
import watchImg from '../../../../public/images/watch.jpg';
import axios from 'axios';

const WatchesCatalogue = () => {
  
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(true);
  
  //get watch data and store it in state
  useEffect(() => {
    axios.get("http://localhost:8081/watches/").then(res => {
      setData(res.data.data);
      setFetching(false);
    }).catch(err => {
      console.log(err);
      setFetching(false);
    });
  }, []);
  
  return (
    <React.Fragment>
      <div className="display-heading"> 
        <DisplayHeading level="h1">Watches Catalogue</DisplayHeading>
      </div>
      <NavBar/>
      <DeviceCardGroup data={data && data} img={watchImg}/>
      <BrowseMoreLink path="/iphones" text="Check out the iPhones"/>
    </React.Fragment>
  )
}
export default WatchesCatalogue;
