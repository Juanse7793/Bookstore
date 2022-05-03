import React from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { statusCheck } from '../redux/categories/categories';

import './Style.css';

const Categories = () => {
  const category = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleCategories = () => {
    dispatch(statusCheck('Under construction'));
  };

  return (
    <div className="Categories">
      <div className="Categories-title">
        <h1>Categories</h1>
        <ul>
          {category.map((item) => (
            <li key={uuid()}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="Categories-content">
        <button type="button" onClick={() => handleCategories()}>
          Check Status
        </button>
      </div>
    </div>
  );
};

export default Categories;
