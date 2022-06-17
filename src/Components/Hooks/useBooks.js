import { useEffect } from 'react';
import { bookPrices } from '../Prices/Prices';

const useBooks = (setter, value) => {
  useEffect(
    () =>
      setter(
        value
          ? value.results.map((book, index) => {
              //Initialize default values in case of missing param
              let genre = 'Fantasy';
              let author = 'Uknown';
              if (book.authors[0]) author = book.authors[0].name;
              if (book.bookshelves[0]) genre = book.bookshelves[0];

              return {
                id: book.id,
                bookTitle: book.title,
                bookAuthor: author,
                bookUrl: book.formats['image/jpeg'],
                bookShelves: genre,
                bookPrice: bookPrices[index],
                bookDownloads: book.download_count,
                bookSubjects: book.subjects,
              };
            })
          : []
      ),
    [value, setter]
  );
};

export default useBooks;
