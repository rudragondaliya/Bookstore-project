import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from '../features/thunk';
import { setEditingBook } from '../features/bookSlice';
import { useNavigate } from 'react-router-dom';

const BookTable = () => {
  const { books } = useSelector(state => state.books);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
  );

  const handleEdit = (book) => {
    dispatch(setEditingBook(book));     
    navigate('/add-book');                  
  };

  return (
    <div className="card shadow-lg p-4 border-0 bg-white">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold text-primary m-0">📚 Book List</h5>
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search by Title or Author..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>Title</th><th>Author</th><th>Genre</th><th>Year</th><th>Status</th><th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center text-muted py-3">No books found.</td>
              </tr>
            ) : (
              filteredBooks.map(book => (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.genre}</td>
                  <td>{book.year}</td>
                  <td>
                    <span className={`badge ${book.status === 'Available' ? 'bg-success' : 'bg-secondary'}`}>
                      {book.status}
                    </span>
                  </td>
                  <td className="text-center">
                    <button className="btn btn-sm btn-outline-warning me-2" onClick={() => handleEdit(book)}>Edit</button>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => dispatch(deleteBook(book.id))}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookTable;

