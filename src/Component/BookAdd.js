import React from 'react'

const BookAdd = () => (
  <div>
    <h3>Enter New Books</h3>
    <form className="add-form">
      <input type="text" name="title" placeholder='Book Title..' />
      <input type='text' name='author' placeholder='Author..' />
      <button type="Submit">Add Book</button>
    </form>
  </div>
)

export default BookAdd;