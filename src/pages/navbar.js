import React from 'react';
import './Style.css';
import { Icon } from '@iconify/react';

const Navbar = () => (
  <div className="navbar">
    <div className="navbar-title">
      <h1 className="title-nav">Bookstore CMS</h1>
    </div>
    <div className="navbar-links">
      <a className="links-books" href="/">BOOKS</a>
      <a className="links-categories" href="/categories">CATEGORIES</a>
    </div>
    <div className="circle-person">
      <Icon className="icon" icon="bi:person-fill" />
    </div>
  </div>
);

export default Navbar;
