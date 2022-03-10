import React from "react";
import Breadcrumbs from "@tds/core-breadcrumbs";

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
      breadcrumbItems={[
        <Breadcrumbs.Item href="/">Device Catalog</Breadcrumbs.Item>,
        <Breadcrumbs.Item href="/iphones">iPhones</Breadcrumbs.Item>,
      ]}
      deviceType="iphone"
      fetchDataFunction={getIphones}
    />
  );
};

export default IPhones;
