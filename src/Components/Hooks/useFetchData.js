import { useState, useEffect } from 'react';
import HomeContainer from '../Home/Home';

const UseBookData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const url = 'https://gutendex.com/books?topic=fantasy';
      const res = await fetch(url);
      const books = await res.json();
      setFetchedData(books);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return [isLoading, fetchedData];
};

export default UseBookData;
