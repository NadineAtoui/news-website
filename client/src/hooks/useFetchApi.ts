import { useEffect, useState } from 'react';

type UseFetchApiType<T> = {
  data: T | null;
  error: string | null;
  loading: boolean;
};

const useFetchApi = <T>(fetchFunction: () => Promise<T>): UseFetchApiType<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchFunction();
        setData(result);
      } catch (error) {
        // TODO: better handle error like displaying alert
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction]);

  return { data, error, loading };
};

export default useFetchApi;
