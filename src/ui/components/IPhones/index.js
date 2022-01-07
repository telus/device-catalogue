import useApplicationData from "../hooks/useApplicationData";
import React from "react";
import DeviceCardGrid from "../DeviceCardGrid";
import Link from "@tds/core-link";
import Footnote from "../Footnote";
import Heading from "@tds/core-heading";

export default function IphonesLayout() {
  const { state } = useApplicationData();
  const data = state.iphone;
  const url =
    "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F6ae7133d-64fb-42e0-bf4a-9e8504d1488e.png?fit=scale-down&source=next&width=700";

  return (
    <React.Fragment>
      <Heading level="h1" tag="h2">View our latest gadgets</Heading>
      <br />
      <div className="iphone-grid">
        <DeviceCardGrid key={data.length} data={data} url={url} />
      </div>
      <div className="footer-text">
        <Link href="https://www.telus.com/en/mobility" invert>
          <Footnote />
        </Link>
      </div>
    </React.Fragment>
  );
}
