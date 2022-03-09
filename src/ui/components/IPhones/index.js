import React from "react";
import Heading from "@tds/core-heading";
import { getIphones } from "../../api/iphone";
import { useFetchData } from "../../api/hooks";

const IPhones = () => {
  const [data, isLoading, isError] = useFetchData(getIphones);

  return <Heading level="h1">IPhones</Heading>;;
};

export default IPhones;
