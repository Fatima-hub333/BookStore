import React from 'react';
import Book from './Book';

const BooksList = () => {
  const books = [
    {
      id: 1,
      name: 'Fatima The successful Business Woman',
      category: 'Professionalism',
      author: 'Fatima Zahir',
    },

    {
      id: 2,
      name: 'The Journey of Learning',
      category: 'Motivational',
      author: 'John Smith',
    },

    {
      id: 3,
      name: 'The Passion of Earning Wealth',
      category: 'Sci-fic',
      author: 'Adam Ught',
    },

    {
      id: 4,
      name: 'The Religion',
      category: 'Religion',
      author: 'Hayya Fatima',
    },
  ];

  return (
    <div>
      <ul className="listBooks">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            name={book.name}
            author={book.author}
          />
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
