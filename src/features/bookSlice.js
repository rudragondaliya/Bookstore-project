import { createSlice } from '@reduxjs/toolkit';
import { addBook, fetchBook, deleteBook, updateBook } from './thunk';

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    editingBook: null,
    loading: false,
    error: null,
  },
  reducers: {
    setEditingBook: (state, action) => {
      state.editingBook = action.payload;
    },
    clearEditingBook: (state) => {
      state.editingBook = null;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBook.fulfilled, (state, action) => {
        state.books = action.payload;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        const index = state.books.findIndex(book => book.id === action.payload.id);
        if (index !== -1) state.books[index] = action.payload;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.books = state.books.filter(book => book.id !== action.payload);
      });
  }
});

export const { setEditingBook, clearEditingBook } = bookSlice.actions;
export default bookSlice.reducer;
