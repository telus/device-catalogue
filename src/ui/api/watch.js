import axios from "./utils";

/**
 * Gets the list of available watches
 *
 * @returns {Promise}
 */
export const getWatches = () => {
  return axios.get("/watches");
};
