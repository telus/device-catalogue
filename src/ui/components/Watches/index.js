import React from "react";
import Heading from "@tds/core-heading";
import { getWatches } from "../../api/watch";
import { useFetchData } from "../../api/hooks";

const Watches = () => {
  const [data, isLoading, isError] = useFetchData(getWatches);

  return <Heading level="h1">Watches</Heading>;
};

export default Watches;
