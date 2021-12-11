import { useEffect, useState } from 'react';

export const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url, options);
        const json = await res.json();
        if (!signal.aborted) setResponse(json);
      } catch (error) {
        if (!signal.aborted) setError(error);
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    };

    fetchData();

    return () => abortController.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data: response, error, loading, updateData: setResponse };
};
