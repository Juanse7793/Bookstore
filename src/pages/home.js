import React from 'react';
import './Style.css';
import BookContainer from '../components/bookContainer';
import AddBook from '../components/addBook';

const Home = () => (
  <div className="Home">
    <div className="Home-title">
      <BookContainer />
      <AddBook />
    </div>
  </div>
);

export default Home;
