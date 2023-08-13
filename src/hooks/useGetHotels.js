import { useState, useEffect } from 'react';

const useGetHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/places'); // Adjust the URL accordingly
        const data = await response.json();
        setHotels(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  return { hotels, loading, error };
};

export default useGetHotels;
