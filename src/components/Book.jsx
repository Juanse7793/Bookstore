import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();

  return (
    <li className="book-individual" key={id}>
      <p className="category-change">Category</p>
      <p className="title-change">{title}</p>
      <p className="author-change">{author}</p>
      <div className="btns-container">
        <button type="button" className="combtn-change">Comments</button>
        <div className="Line-2" />
        <button className="rembtn-change" type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
        <div className="Line-2" />
        <button type="button" className="edbtn-change">Edit</button>
      </div>
    </li>
  );
};
export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
