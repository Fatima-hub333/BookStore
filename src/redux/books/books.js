import { act } from "react-dom/test-utils"

const ADD_BOOK = 'bookstore/books/ADD_BOOK'
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK'

const initialState = []

export const addBook = (book) => ({ type: ADD_BOOK, payload: book })
export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: id })

const books = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state,
      action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((books) => books.id !== action.payload)
    default:
      return state;
  }
};

export default books;