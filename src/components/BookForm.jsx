import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, updateBook } from '../features/thunk';
import { clearEditingBook } from '../features/bookSlice';
import { useNavigate } from 'react-router-dom';

const BookForm = () => {
  const dispatch = useDispatch();
  const { editingBook } = useSelector(state => state.books);
  const navigate = useNavigate()

  const [form, setForm] = useState({
    title: "", author: "", genre: "", year: "", status: "Available"
  });

  useEffect(() => {
    if (editingBook) setForm(editingBook);
  }, [editingBook]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (editingBook) {
      dispatch(updateBook(form));
      dispatch(clearEditingBook());
    } else {
      dispatch(addBook(form));
    }
    setForm({ title: "", author: "", genre: "", year: "", status: "Available" });
  };

  return (
    <div className="card p-4 shadow-sm bg-white">
      <div className="head d-flex gap-3 align-items-center justify-content-between">
      <h5 className="fw-bold mb-3 text-primary">{editingBook ? 'Update Book' : 'Add New Book'}</h5>
      <button className=' btn btn-sm mb-3 btn-outline-primary' onClick={()=>navigate("/")}>Back to Dashboard</button>
    </div>
      <form onSubmit={handleSubmit} className="row g-3">
        <input className="form-control" name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
        <input className="form-control" name="author" value={form.author} onChange={handleChange} placeholder="Author" required />
        <input className="form-control" name="genre" value={form.genre} onChange={handleChange} placeholder="Genre" required />
        <input className="form-control" type="number" name="year" value={form.year} onChange={handleChange} placeholder="Year" required />
        <select className="form-select" name="status" value={form.status} onChange={handleChange}>
          <option>Available</option>
          <option>Issued</option>
        </select>
        <div className="text-end">
          <button type="submit" className={`btn ${editingBook ? 'btn-warning' : 'btn-success'}`}>
            {editingBook ? 'Update Book' : 'Add Book'}            
          </button>
          
        </div>
      </form>
    </div>
  );
};

export default BookForm;
