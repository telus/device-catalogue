import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  /* initialized empty array as state and updated it with data from API during axios GET request */
  const [state, setState] = useState({
    iphone: [],
    watch: [],
  });

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8081/iphones/"),
      axios.get("http://localhost:8081/watches/"),
    ])
      .then((all) => {
        setState((prev) => ({
          ...prev,
          iphone: all[0].data.data,
          watch: all[1].data.data,
        }));
      })
      .catch((error) => console.log(error));
  }, []);

  return { state };
}
