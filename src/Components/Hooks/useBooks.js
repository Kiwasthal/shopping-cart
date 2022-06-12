import { useEffect } from 'react';
import { bookPrices } from '../Prices/Prices';

const useBooks = (handler, value) => {
  useEffect(
    () =>
      handler(
        value
          ? value.results.map((book, index) => {
              let author;
              if (book.authors[0]) author = book.authors[0].name;
              else author = 'Uknown';

              return {
                id: book.id,
                bookTitle: book.title,
                bookAuthor: author,
                bookUrl: book.formats['image/jpeg'],
                bookShelves: book.bookshelves[0],
                bookPrice: bookPrices[index],
              };
            })
          : []
      ),
    [value, handler]
  );
};

export default useBooks;
