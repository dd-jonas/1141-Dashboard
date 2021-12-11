import { useState } from 'react';

export const useMutation = (url, options = {}) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const mutate = async (data, onSuccess) => {
    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        body: JSON.stringify(data),
        ...options,
      });

      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}: ${res.url}`)
      }
      
      onSuccess?.();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setError(null);
    setLoading(false);
  }

  return { mutate, error, loading, reset }
} 