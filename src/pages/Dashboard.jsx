import { useSelector } from 'react-redux';
import BookTable from '../components/BookTable';

const Dashboard = () => {
  const { books } = useSelector(state => state.books);
  const total = books.length;
  const available = books.filter(b => b.status === "Available").length;
  const issued = books.filter(b => b.status === "Issued").length;

  return (
    <>
      <h3 className="fw-bold mb-4 text-primary">📊 Dashboard</h3>
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card bg-primary text-white text-center shadow">
            <div className="card-body">
              <h6>Total Books</h6>
              <h3>{total}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-success text-white text-center shadow">
            <div className="card-body">
              <h6>Available</h6>
              <h3>{available}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-danger text-white text-center shadow">
            <div className="card-body">
              <h6>Issued</h6>
              <h3>{issued}</h3>
            </div>
          </div>
        </div>
      </div>
      <BookTable />
    </>
  );
};

export default Dashboard;

