import { useState, useEffect } from 'react';

const PAGES_PER_PAGE = 10;

const useGetHotels = (props) => {
  const [hotels, setHotels] = useState([]);
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1)
  const limit = PAGES_PER_PAGE
  
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        setLoading(true)
        const response = await fetch(`http://localhost:8080/api/places?page=${page}&limit=${limit}`);
        const data = await response.json();
        
        let total = Math.ceil(data.total/PAGES_PER_PAGE)

        setHotels(data.records);
        setTotalPages(total)
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    fetchHotels();
  }, [page]);

  return { hotels, loading, error, totalPages, page, setPage };
};

export default useGetHotels;
