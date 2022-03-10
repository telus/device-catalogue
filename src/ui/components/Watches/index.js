import React from "react";
import Breadcrumbs from "@tds/core-breadcrumbs";

import { getWatches } from "../../api/watch";
import DevicePage from "../common/DevicePage";

const Watches = () => {
  return (
    <DevicePage
      title="iPhones"
      subtitle="All watches - even the latest releases - are now $0 upfront."
      breadcrumbItems={[
        <Breadcrumbs.Item href="/">Device Catalog</Breadcrumbs.Item>,
        <Breadcrumbs.Item href="/watches">Watches</Breadcrumbs.Item>,
      ]}
      deviceType="watch"
      fetchDataFunction={getWatches}
    />
  );
};

export default Watches;
