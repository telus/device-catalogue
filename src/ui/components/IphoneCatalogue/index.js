import React, { useState, useEffect } from 'react';
import DisplayHeading from '@tds/core-display-heading';
import NavBar from '../Reusable/NavBar';
import BrowseMoreLink from '../Reusable/BrowseMoreLink';
import iphoneImg from '../../../../public/images/iphone.jpg';
import DeviceCardGroup from '../Reusable/DeviceCardGroup';
import axios from 'axios';
import DeviceNotFound from '../Reusable/DeviceNotFound';

const IphoneCatalogue = () => {
  const [data, setData] = useState([]);
  
  //get iphone data and store it in state
  useEffect(() => {
    axios.get("http://localhost:8081/iphones/").then(res => {
      setData(res.data.data);
    }).catch(err => {
      console.log(err);
    });
  }, [data]);

  return (
    <React.Fragment>
      <div className="display-heading"> 
        <DisplayHeading level="h1">iPhone Catalogue</DisplayHeading>
      </div>
      <NavBar/>
      {data && data.length > 0
        ?<DeviceCardGroup data={data} img={iphoneImg}/>
        :<DeviceNotFound/>
      }
      <BrowseMoreLink path="/watches" text="Check out the watches"/>
    </React.Fragment>
  )
}

export default IphoneCatalogue;
