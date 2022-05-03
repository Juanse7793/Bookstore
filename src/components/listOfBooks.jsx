import { useSelector } from 'react-redux';
import React from 'react';
import Book from './Book';

const ListOfBooks = () => {
  const books = useSelector((state) => state.books);

  return (
    <ul className="books-container">
      {books.map((book) => (
        <Book title={book.title} author={book.author} key={book.title} />
      ))}
    </ul>
  );
};
export default ListOfBooks;
