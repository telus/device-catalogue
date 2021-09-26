import React from 'react';
import Heading from '@tds/core-heading';
import DisplayHeading from '@tds/core-display-heading';
import Image from '@tds/core-image';
import Card from '@tds/core-card';
import FlexGrid from '@tds/core-flex-grid';
import NavBar from '../NavBar';
import iphoneImg from '../../../../public/images/iphone.jpg';
import watchImg from '../../../../public/images/watch.jpg';
const Home = () => {
  // {
  //   image: iPhoneImg,
  //   path: "/iphones",
  //   altText: "Apple iPhone",
  //   linkText: "iPhones"
  // },
  // {
  //   image: watchImg,
  //   path: "/watches",
  //   altText: "Apple Watch",
  //   linkText: "Watches"
  // }
return (
  <React.Fragment>
    <div>
      <DisplayHeading level="h1">TELUS Device Catalogue</DisplayHeading>
    </div>
    <NavBar/>
    

    <FlexGrid limitWidth>
      <FlexGrid.Row>
        <FlexGrid.Col>
          <Card>
            <Image src={iphoneImg}/>
          </Card>
        </FlexGrid.Col>
        <FlexGrid.Col>
          <Card>
            <Image src={watchImg}/>
          </Card>
          iphone img and watch image with the link to their page
        </FlexGrid.Col>
      </FlexGrid.Row>
    </FlexGrid>
    <Heading level="h3">Mobile solutions for all your needs.</Heading>
    
  </React.Fragment>
)
}

export default Home;
