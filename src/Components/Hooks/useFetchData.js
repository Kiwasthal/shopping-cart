import { useState, useEffect } from 'react';

const UseBookData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);
  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const url = 'https://gutendex.com/books?topic=fantasy';
        const res = await fetch(url);
        const books = await res.json();
        setFetchedData(books);
      } catch (e) {
        setErr(e);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return [isLoading, fetchedData, err];
};

export default UseBookData;
