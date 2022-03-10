import axios from "./utils";

/**
 * Gets the list of available iphones
 *
 * @returns {Promise}
 */
export const getIphones = () => {
  return axios.get("/iphones");
};


