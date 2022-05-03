import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <li className="book" key={title}>
      <p>
        {title}
        &nbsp; by &nbsp;
        {author}
      </p>
      <button type="button">Delete</button>
    </li>
  );
};
export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
