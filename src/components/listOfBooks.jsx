import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import Book from './Book';
import { getBooks } from '../redux/books/books';

const ListOfBooks = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <ul className="books-container">
      {books.map((book) => (
        <Book title={book.title} author={book.author} id={book.item_id} key={book.title} />
      ))}
    </ul>
  );
};
export default ListOfBooks;
