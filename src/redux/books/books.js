import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [
  {
    id: uuidv4(),
    title: 'The Successful Women',
    category: 'Sci-Fi',
    author: 'Fatima Zahir',
  },
  {
    id: uuidv4(),
    title: 'Hayya My Life',
    category: 'Motivational',
    author: 'Fatimaaa',
  },
  {
    id: uuidv4(),
    title: 'The Life & Death',
    category: 'Sci-Fi',
    author: 'John Adatya',
  },
  {
    id: uuidv4(),
    title: 'The Wealth or The Love',
    category: 'Sci-Fi',
    author: 'Abraham Joliey',
  },
];

export const addBook = (book) => ({ type: ADD_BOOK, payload: book });
export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: id });

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((books) => books.id !== action.payload);
    default: return state;
  }
};

export default booksReducer;
