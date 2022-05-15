import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok !== true) {
          throw Error("No es posible conectarse con el servidor");
        }
        setData(data);
        console.log(data);
        console.log(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsPending(false);
      }
    };
    getData();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
