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
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const asyncFunction = async () => {
      try {
        setIsLoading(true);

        const response = await fetchFunction(...fetchFunctionParams);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setHasError(true);
      }
    };
    asyncFunction();
  }, []);

  return [data.data, isLoading, hasError, error];
};
