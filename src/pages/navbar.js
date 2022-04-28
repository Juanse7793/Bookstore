import React from 'react';
import './Style.css';

const Navbar = () => (
  <div className="navbar">
    <div className="navbar-title">
      <h1>Bookstore CMS</h1>
    </div>
    <div className="navbar-links">
      <a className="links" href="/">Books</a>
      <a className="links" href="/author">Author</a>
    </div>
  </div>
);

export default Navbar;
