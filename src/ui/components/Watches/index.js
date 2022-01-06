import React from "react";
import useApplicationData from "../hooks/useApplicationData";
import DisplayHeading from "@tds/core-display-heading";
import DeviceCardGrid from "../DeviceCardGrid";
import Link from "@tds/core-link";
import Footnote from "../Footnote";

export default function WatchesLayout() {
  const { state } = useApplicationData();
  const data = state.watch;
  const url =
    "https://www.att.com/idpassets/global/devices/other/apple/apple-watch-se-40mm/defaultimage/space-gray-aluminum-charcoal-sport-hero-zoom.png";

  return (
    <React.Fragment>
      <div>
        <DisplayHeading level="h1">List of Watches</DisplayHeading>
      </div>
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
