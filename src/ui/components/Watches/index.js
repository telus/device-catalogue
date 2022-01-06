import React from "react";
import useApplicationData from "../hooks/useApplicationData";
import DeviceCardGrid from "../DeviceCardGrid";
import Heading from "@tds/core-heading";
import Link from "@tds/core-link";
import Footnote from "../Footnote";

export default function WatchesLayout() {
  const { state } = useApplicationData();
  const data = state.watch;
  const url =
    "https://www.att.com/idpassets/global/devices/other/apple/apple-watch-se-40mm/defaultimage/space-gray-aluminum-charcoal-sport-hero-zoom.png";

  return (
    <React.Fragment>
      <Heading level="h1" tag="h2">
        View our latest Apple watches
      </Heading>
      <br />
      <div className="watches-grid">
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
