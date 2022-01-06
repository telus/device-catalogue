import React from "react";
import Link from '@tds/core-link';
import Box from "@tds/core-box";
import HairlineDivider from "@tds/core-hairline-divider";
import "./NavBar.css";
import Home from "./Home";
import IphonesLayout from "./IPhones";
import WatchesLayout from "./Watches";

const NavBar = () => {
  return (
    <Box inset={3} className="nav-bar" inline between={3}>
    <Link href="https://www.telus.com/en/?linktype=ge-supernav"  invert>
      Personal
    </Link>
    <HairlineDivider vertical />
    <Link href="https://www.telus.com/en/business/small?linktype=ge-supernav"  invert>
      Business
    </Link>
    <HairlineDivider vertical />
    <Link href="https://www.telus.com/en/health?linktype=ge-supernav"  invert>
      Health
    </Link>
    <HairlineDivider vertical />
    <Link href="https://www.telus.com/en/on/agriculture?linktype=ge-supernav"  invert>
      Agriculture
    </Link>
    <HairlineDivider vertical />
    <Link href="https://www.telus.com/en/social-impact?linktype=ge-supernav"  invert>
      Social Impact
    </Link>
  </Box>
  );
};
export default NavBar;
