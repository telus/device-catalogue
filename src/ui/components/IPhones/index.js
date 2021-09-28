import React, { Fragment, useState, useEffect } from 'react';
import DisplayHeading from '@tds/core-display-heading';
import TdsLink from '@tds/core-link';
import ItemGrid from '../Common/ItemGrid';
import axios from 'axios';
import iPhoneImg from '../../../../public/images/iphone.jpg';
import Link from '../Common/LinkComponent';
import ItemPageNotFound from '../Common/ItemPageNotFound';
import FooterLink from '../Common/FooterLink';

// Mock for unit tests
// const iPhoneImg = '';

const IPhones = () => {
  const [iphoneData, setIPhoneData] = useState([]);
  const [fetching, setFetching] = useState(true);

  // Fetch iPhone data from server then set into state
  useEffect(() => {
    axios.get("http://localhost:8081/iphones/").then(res => {
      setIPhoneData(res.data.data);
      setFetching(false);
    }).catch(err => {
      console.log(err);
      setFetching(false);
    });
  }, []);

  return (
    <Fragment>
      <div className="header-text">
        <DisplayHeading level="h1">iPhones</DisplayHeading>
        <Link TDSLink={TdsLink} to="/">Return to the Device Catalogue</Link>
      </div>
      {
        iphoneData.length === 0 && !fetching ? (
          <Fragment>
            <ItemPageNotFound text="iPhones" />
            <FooterLink path={"/watches"} text={"Browse Watches"} />
          </Fragment>
        ) : !fetching ? (
          <Fragment>
            <ItemGrid deviceData={iphoneData} deviceImage={iPhoneImg} />
            <FooterLink path={"/watches"} text={"Browse Watches"} />
          </Fragment>
        ) : null
      }
    </Fragment>
  );
}

export default IPhones;