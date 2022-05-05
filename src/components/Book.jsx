import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();

  return (
    <li className="book" key={title}>
      <p>
        {title}
        &nbsp; by &nbsp;
        {author}
      </p>
      <button type="button" onClick={() => dispatch(removeBook(id))}>Delete</button>
    </li>
  );
};
export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
