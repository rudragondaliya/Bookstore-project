import React from 'react';
import { useSelector } from 'react-redux';
import BookForm from '../components/BookForm';
import BookTable from '../components/BookTable';

const Home = ({ setEditingBook }) => {
  const { books } = useSelector(state => state.books);

  const total = books.length;
  const available = books.filter(b => b.status === 'Available').length;
  const issued = books.filter(b => b.status === 'Issued').length;

  return (
    <div className="d-flex">
  
      <div className="bg-dark text-white p-3" style={{ minHeight: '100vh', width: '250px' }}>
        <h4 className="text-center mb-4">📚 Admin Panel</h4>
        <ul className="nav flex-column">
          <li className="nav-item"><a className="nav-link text-white" href="#">🏠 Dashboard</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#">➕ Add Book</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#">📄 Book List</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#">👥 Users</a></li>
          <li className="nav-item"><a className="nav-link text-danger mt-3" href="#">🚪 Logout</a></li>
        </ul>
      </div>

   
      <div className="flex-grow-1 p-4 bg-light">
        <h3 className="mb-4 fw-bold">📊 Dashboard Overview</h3>

      
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card bg-primary text-white shadow-sm">
              <div className="card-body text-center">
                <h6>Total Books</h6>
                <h3>{total}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-success text-white shadow-sm">
              <div className="card-body text-center">
                <h6>Available</h6>
                <h3>{available}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-danger text-white shadow-sm">
              <div className="card-body text-center">
                <h6>Issued</h6>
                <h3>{issued}</h3>
              </div>
            </div>
          </div>
        </div>

        <BookForm />

        <BookTable setEditingBook={setEditingBook} />
      </div>
    </div>
  );
};

export default Home;
