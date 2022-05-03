const STATUS_CHECK = 'bookstore/categories/STATUS_CHECK';

export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case STATUS_CHECK:
      return [...state, action.category];
    default:
      return state;
  }
}

export function statusCheck(category) {
  return {
    type: STATUS_CHECK,
    category,
  };
}
