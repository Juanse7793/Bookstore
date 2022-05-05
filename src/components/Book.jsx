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
          <p className="category-change weight repeated">Category</p>
          <p className="title-change weight repeated">{title}</p>
          <p className="author-change repeated">{author}</p>
          <div className="btns-container">
            <button type="button" className="combtn-change repeated">
              Comments
            </button>
            <div className="Line-2" />
            <button
              className="rembtn-change repeated"
              type="button"
              onClick={() => dispatch(removeBook(id))}
            >
              Remove
            </button>
            <div className="Line-2" />
            <button type="button" className="edbtn-change repeated">
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
            <p className="percentage repeated">75%</p>
            <p className="completed repeated">completed</p>
          </div>
        </div>
        <div className="third">
          <p className="current repeated">CURRENT CHAPTER</p>
          <p className="chapter repeated">Chapter 17</p>
          <button className="progress-btn" type="button"><span className="progress repeated">UPDATE PROGRESS</span></button>
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
