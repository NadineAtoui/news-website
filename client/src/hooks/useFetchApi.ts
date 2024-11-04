
// This is a custom React hook that fetches data from an API.
// It manages the API call lifecycle including state management for `data`, `error`, and `loading` status.

import { useEffect, useState, useCallback } from 'react';

type UseFetchApiType<T> = {
  data: T | null;
  error: string | null;
  loading: boolean;
  retry: () => void; 
};

const useFetchApi = <T, U = any>(fetchFunction: (params?: U) => Promise<T>, params?: U): UseFetchApiType<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchFunction(params);
      
      if (!result || typeof result !== 'object') {
        throw new Error("Invalid data received.");
      }

      setData(result);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [fetchFunction, params]);

  const retry = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading, retry };
};

export default useFetchApi;
