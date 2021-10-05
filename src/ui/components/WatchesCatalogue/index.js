import React, { useState, useEffect } from 'react';
import DisplayHeading from '@tds/core-display-heading';
import NavBar from '../Reusable/NavBar';
import BrowseMoreLink from '../Reusable/BrowseMoreLink';
import DeviceCardGroup from '../Reusable/DeviceCardGroup';
import watchImg from '../../../../public/images/watch.jpg';
import axios from 'axios';
import DeviceNotFound from '../Reusable/DeviceNotFound';

const WatchesCatalogue = () => {
  
  const [data, setData] = useState([]);
  
  //get watch data and store it in state
  useEffect(() => {
    axios.get("http://localhost:8081/watches/").then(res => {
      setData(res.data.data);
    }).catch(err => {
      console.log(err);
    });
  }, [data]);
  
  return (
    <React.Fragment>
      <div className="display-heading"> 
        <DisplayHeading level="h1">Watches Catalogue</DisplayHeading>
      </div>
      <NavBar/>
      {data && data.length > 0
      ? <DeviceCardGroup data={data && data} img={watchImg}/>
      : <DeviceNotFound/>
      }
      <BrowseMoreLink path="/iphones" text="Check out the iPhones"/>
    </React.Fragment>
  )
}
export default WatchesCatalogue;
