import React from 'react';
//import Heading from '@tds/core-heading';
import DisplayHeading from '@tds/core-display-heading';
import NavBar from '../Reusable/NavBar';
import BrowseMoreLink from '../Reusable/BrowseMoreLink';
const IphoneCatalogue = () => {
  return (
    <React.Fragment>
      <div className="display-heading"> 
        <DisplayHeading level="h1">iPhone Catalogue</DisplayHeading>
      </div>
      <NavBar/>
      
      <BrowseMoreLink path="/watches" text="Check out the watches"/>
    </React.Fragment>
  )
}

export default IphoneCatalogue;
