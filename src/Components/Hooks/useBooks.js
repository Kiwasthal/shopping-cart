import { useEffect } from 'react';

const useBooks = (handler, value) => {
  useEffect(
    () =>
      handler(
        value
          ? value.results.map(book => {
              let author;
              if (book.authors[0]) author = book.authors[0].name;
              else author = 'Uknown';

              return {
                bookTitle: book.title,
                bookAuthor: author,
                booksUrl: book.formats['image/jpeg'],
                bookShelves: book.bookshelves[0],
              };
            })
          : []
      ),
    [value, handler]
  );
};

export default useBooks;
