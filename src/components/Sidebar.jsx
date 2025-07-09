import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <div className="bg-dark text-white position-fixed h-100 p-3" style={{ width: '220px' }}>
    <h5 className="text-center mb-4">📚 Bookstore</h5>
    <ul className="nav flex-column">
      <li className="nav-item">
        <NavLink className="nav-link text-white" to="/">Dashboard</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-white" to="/add">Add Book</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to="/list" className="nav-link text-white">Book List</NavLink> 


      </li>
    </ul>
  </div>
);

export default Sidebar;
