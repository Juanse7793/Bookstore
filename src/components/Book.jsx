import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();

  return (
    <li className="book-individual" key={id}>
      <div className="super">
        <div className="Main">
          <p className="category-change">Category</p>
          <p className="title-change">{title}</p>
          <p className="author-change">{author}</p>
          <div className="btns-container">
            <button type="button" className="combtn-change">
              Comments
            </button>
            <div className="Line-2" />
            <button
              className="rembtn-change"
              type="button"
              onClick={() => dispatch(removeBook(id))}
            >
              Remove
            </button>
            <div className="Line-2" />
            <button type="button" className="edbtn-change">
              Edit
            </button>
          </div>
        </div>
        <div className="second">
          <div className="circle-wrap">
            <div className="circle">
              <div className="mask full">
                <div className="fill" />
              </div>
              <div className="mask half">
                <div className="fill" />
              </div>
              <div className="inside-circle" />
            </div>
          </div>
          <div className="Datas">
            <p className="percentage">75%</p>
            <p className="completed">completed</p>
          </div>
        </div>
        <div className="third">
          <p>CURRENT CHAPTER</p>
          <p>Chapter 17</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
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
