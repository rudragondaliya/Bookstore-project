import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc
} from "firebase/firestore";

const bookRef = collection(db, "books");

export const fetchBook = createAsyncThunk("book/fetchBook", async (_, { rejectWithValue }) => {
  try {
    const snapshot = await getDocs(bookRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const addBook = createAsyncThunk("book/addBook", async (book, { rejectWithValue }) => {
  try {
    const docRef = await addDoc(bookRef, book);
    return { id: docRef.id, ...book };
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const deleteBook = createAsyncThunk("book/deleteBook", async (id, { rejectWithValue }) => {
  try {
    await deleteDoc(doc(db, "books", id));
    return id;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const updateBook = createAsyncThunk("books/updateBook", async (book, { rejectWithValue }) => {
  try {
    const bookRef = doc(db, "books", book.id);
    await updateDoc(bookRef, book);
    return book;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
