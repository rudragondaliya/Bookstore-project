import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/bookSlice";
import authReducer from "../auth/authSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    auth: authReducer,
  },
});
