import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        title,
        author,
        category: 'Any',
      }),
    );
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="main-add">
      <div className="Line" />
      <span className="add-title">ADD NEW BOOK</span>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="title-form"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="author-form"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit" className="add-btn"><span className="add-btn-text">ADD BOOK</span></button>
      </form>
    </div>
  );
};

export default AddBook;
