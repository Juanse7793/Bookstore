import { v4 as uuid } from 'uuid';
import { fetchBooks, createBook } from './api';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOK = 'bookstore/books/GET_BOOK';

export default function booksReducer(
  state = [],
  action,
) {
  switch (action.type) {
    case GET_BOOK:
      return [...state, action.payload];
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

export const getBooks = () => async (dispatch) => {
  const books = await fetchBooks();
  dispatch({
    type: GET_BOOK,
    payload: books,
  });
  return books;
};

export const addBook = (book) => async (dispatch) => {
  const newBook = await createBook({ ...book, item_id: uuid() });
  dispatch({
    type: ADD_BOOK,
    payload: newBook,
  });
  return true;
};

export function removeBook(id) {
  return {
    type: REMOVE_BOOK,
    id,
  };
}
