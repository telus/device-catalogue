import React, { useState, useEffect } from 'react';
//import Heading from '@tds/core-heading';
import DisplayHeading from '@tds/core-display-heading';
import NavBar from '../Reusable/NavBar';
import BrowseMoreLink from '../Reusable/BrowseMoreLink';
import iphoneImg from '../../../../public/images/iphone.jpg';
import DeviceCardGroup from '../Reusable/DeviceCardGroup';
import axios from 'axios';

const IphoneCatalogue = () => {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(true);

  //get iphone data and store it in state
  useEffect(() => {
    axios.get("http://localhost:8081/iphones/").then(res => {
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
        <DisplayHeading level="h1">iPhone Catalogue</DisplayHeading>
      </div>
      <NavBar/>
      <DeviceCardGroup data={data && data} img={iphoneImg}/>
      <BrowseMoreLink path="/watches" text="Check out the watches"/>
    </React.Fragment>
  )
}

export default IphoneCatalogue;
