const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export default function booksReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
}

export function addBook(book) {
  return {
    type: ADD_BOOK,
    book,
  };
}

export function removeBook(book) {
  return {
    type: REMOVE_BOOK,
    book,
  };
}
