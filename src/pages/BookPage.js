import React from 'react';
import BooksList from '../Component/BooksList';
import BookAdd from '../Component/BookAdd';

const BookPage = () => (
  <div>
    {/* <h2>Books Page</h2> */}
    <BooksList />
    <BookAdd />
  </div>
);

export default BookPage;