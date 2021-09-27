import React, { Fragment, useState, useEffect } from 'react';
import DisplayHeading from '@tds/core-display-heading';
import TdsLink from '@tds/core-link';
import ItemGrid from '../Common/ItemGrid';
import axios from 'axios';
import watchImg from '../../../../public/images/watch.jpg';
import Link from '../Common/LinkComponent';
import ItemPageNotFound from '../Common/ItemPageNotFound';
import FooterLink from '../Common/FooterLink';
import Button from '@tds/core-button';

const Watches = () => {
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

  return (
    <Fragment>
      <div className="header-text">
        <DisplayHeading level="h1">Watches</DisplayHeading>
        <Link TDSLink={TdsLink} to="/">Return to the Device Catalogue</Link>
      </div>
      {
        watchData.length === 0 && !fetching ? (
          <Fragment>
            <ItemPageNotFound text="Watches" />
            <FooterLink path={"/iphones"} text={"Browse iPhones"} />
            </Fragment>
          
        ) : !fetching ? (
          <Fragment>
            <ItemGrid deviceData={watchData} deviceImage={watchImg} />
            <FooterLink path={"/iphones"} text={"Browse iPhones"} />            
          </Fragment>          
        ) : null
      }
    </Fragment>
  );
}

export default Watches;