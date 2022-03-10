import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "@tds/core-breadcrumbs";
import ButtonLink from "@tds/core-button-link";

import { getIphones } from "../../api/iphone";
import DevicePage from "../common/DevicePage";

const IPhones = () => {
  return (
    <DevicePage
      title="iPhones"
      subtitle="Apple iPhones offer millions of apps, games and features to
  enhance your work and personal life. Pair your new iPhone with
  Apple Watch and enjoy the health benefits of having a digital
  fitness partner with you every step of the way."
      breadcrumbs={
        <Breadcrumbs>
          <Breadcrumbs.Item href="/">Device Catalog</Breadcrumbs.Item>
          <Breadcrumbs.Item href="/iphones">iPhones</Breadcrumbs.Item>
        </Breadcrumbs>
      }
      deviceType="iphone"
      extraHeading={
        <ButtonLink
          variant="standard"
          reactRouterLinkComponent={Link}
          to="/watches"
          fullWidth={false}
        >
          View Watches
        </ButtonLink>
      }
      fetchDataFunction={getIphones}
    />
  );
};

export default IPhones;
