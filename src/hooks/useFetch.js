import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setIsLoading(() => true);
      setError(() => null);
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await response.json();

        setData(() => data);
      } catch (error) {
        setError(error);
        setData(null);
        console.log(error);
      }

      setIsLoading(() => false);
    })();
  }, [url]);

  return { data, isLoading, error };
};
export default useFetch;
