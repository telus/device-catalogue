import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "@tds/core-breadcrumbs";
import ButtonLink from "@tds/core-button-link";

import { getWatches } from "../../api/watch";
import DevicePage from "../common/DevicePage";

const Watches = () => {
  return (
    <DevicePage
      title="Watches"
      subtitle="All watches - even the latest releases - are now $0 upfront."
      breadcrumbs={
        <Breadcrumbs>
          <Breadcrumbs.Item key="catalog" href="/">
            Device Catalog
          </Breadcrumbs.Item>
          <Breadcrumbs.Item key="watches" href="/watches">
            Watches
          </Breadcrumbs.Item>
        </Breadcrumbs>
      }
      deviceType="watch"
      extraHeading={
        <ButtonLink
          variant="standard"
          reactRouterLinkComponent={Link}
          to="/iphones"
        >
          View iPhones
        </ButtonLink>
      }
      fetchDataFunction={getWatches}
    />
  );
};

export default Watches;
