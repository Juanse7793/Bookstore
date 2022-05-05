import React from 'react';
import './Style.css';

const Navbar = () => (
  <div className="navbar">
    <div className="navbar-title">
      <h1 className="title-nav">Bookstore CMS</h1>
    </div>
    <div className="navbar-links">
      <a className="links-books" href="/">BOOKS</a>
      <a className="links-categories" href="/categories">CATEGORIES</a>
    </div>
  </div>
);

export default Navbar;
