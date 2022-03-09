import { useEffect, useState } from "react";

/**
 * Hook used by components to fetch data
 *
 * @param {*} fetchFunction
 * @param  {...any} fetchFunctionParams
 * @returns {Array} An array in the form [data, isLoading, isError, error]
 */
export const useFetchData = (fetchFunction, ...fetchFunctionParams) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const asyncFunction = async () => {
      try {
        setIsLoading(true);

        const data = await fetchFunction(...fetchFunctionParams);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsError(true);
      }
    };
    asyncFunction();
  }, []);

  return [data, isLoading, isError, error];
};
