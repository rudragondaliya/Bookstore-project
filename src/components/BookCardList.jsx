import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from '../features/thunk';
import { setEditingBook } from '../features/bookSlice';
import { useNavigate } from 'react-router-dom';

const BookCardList = () => {
  const { books } = useSelector(state => state.books);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (books.length === 0) {
    return (
      <div className="alert alert-warning text-center">
        No books available. Please add some!
      </div>
    );
  }

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Available':
        return 'border-success text-success';
      case 'Checked Out':
        return 'border-danger text-danger';
      case 'Reserved':
        return 'border-warning text-warning';
      default:
        return 'border-secondary text-secondary';
    }
  };

  return (
    <div className="row">
      {books.map(book => (
        <div className="col-md-4 mb-4" key={book.id}>
          <div className={`card shadow-sm border-2 h-100 ${getStatusStyle(book.status)}`}>
            <div className="card-body">
              <h5 className="card-title fw-bold">{book.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
              <p className="card-text">
                <strong>Genre:</strong> {book.genre}<br />
                <strong>Year:</strong> {book.year}<br />
                <strong>Status:</strong>{" "}
                <span className={`badge ${book.status === 'Available' ? 'bg-success' :
                                  book.status === 'Checked Out' ? 'bg-danger' :
                                  book.status === 'Reserved' ? 'bg-warning text-dark' :
                                  'bg-secondary'}`}>
                  {book.status}
                </span>
              </p>
              <div className="d-flex justify-content-between mt-3">
                <button
                  className="btn btn-sm btn-outline-warning"
                  onClick={() => {
                    dispatch(setEditingBook(book));
                    navigate('/add-book');
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => dispatch(deleteBook(book.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookCardList;
