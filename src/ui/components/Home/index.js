import React from 'react';
import Heading from '@tds/core-heading';
import DisplayHeading from '@tds/core-display-heading';
import Link from '@tds/core-link';
import FlexGrid from '@tds/core-flex-grid';
import NavBar from '../Reusable/NavBar';
import iphoneImg from '../../../../public/images/iphone.jpg';
import watchImg from '../../../../public/images/watch.jpg';
import DeviceCard from '../Reusable/DeviceCard';
const Home = () => {

return (
  <React.Fragment>
    <div className="display-heading">
      <DisplayHeading level="h1">TELUS Device Catalogue</DisplayHeading>
    </div>
    <NavBar/>
    <FlexGrid id="catalogues-container">
      <FlexGrid.Row>
        <FlexGrid.Col>
          <DeviceCard img={iphoneImg} path="/iphones" text="iPhones"/>
        </FlexGrid.Col>
        <FlexGrid.Col>
          <DeviceCard img={watchImg} path="/watches" text="Watches"/>
       </FlexGrid.Col>
      </FlexGrid.Row>
    </FlexGrid> 
    <div className="bottom-text">
      <Link href="https://www.telus.com/en/mobility"  invert>
        <Heading level="h2" >
          Mobile solutions for all your needs.
        </Heading>
      </Link>
    </div>
  </React.Fragment>
)
}

export default Home;
