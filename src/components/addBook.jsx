import React from 'react';

const AddBook = () => (
  <form className="add-book">
    <input type="text" placeholder="Book Title" />
    <input type="text" placeholder="Book Author" />
    <button type="submit">Add Book</button>
  </form>
);
export default AddBook;
