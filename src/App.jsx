import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { setUser } from './auth/authSlice';

import Login from './pages/Login';
import Signup from './pages/SignUp;'
import ProtectedRoute from './components/ProtectedRoute';


import Dashboard from './pages/Dashboard';
import AddBook from './pages/AddBook';
import BookList from './pages/BookList';
import SidebarLayout from './layouts/SideBarLayouts';
import React from 'react';
import { fetchBook } from './features/thunk';

const App = () => {
  const dispatch = useDispatch();

React.useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    dispatch(setUser(user));
    if (user) {
      dispatch(fetchBook()); // ✅ Fetch books after login/reload
    }
  });
  return () => unsubscribe();
}, [dispatch]);


  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => dispatch(setUser(user)));
    return () => unsub();
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SidebarLayout><Dashboard /></SidebarLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/add"
          element={
            <ProtectedRoute>
              <SidebarLayout><AddBook /></SidebarLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/list"
          element={
            <ProtectedRoute>
              <SidebarLayout><BookList  /></SidebarLayout>
            </ProtectedRoute>
          }
          
        />
        <Route path="/add-book" element={<AddBook />} />
        

      </Routes>
    </Router>
  );
};

export default App;
