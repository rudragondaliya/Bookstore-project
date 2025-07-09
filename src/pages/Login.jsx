import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { loginUser } from '../auth/auththunk';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector(state => state.auth);

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await dispatch(loginUser(form));
    if (loginUser.fulfilled.match(result)) navigate('/');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card glass p-4 border-0 shadow" style={{ width: '100%', maxWidth: '400px', backdropFilter: 'blur(10px)' }}>
        <div className="text-center mb-3">
          <h3 className="fw-bold text-primary">Welcome Back</h3>
          <p className="text-muted small">Log in to continue</p>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3 input-group">
            <span className="input-group-text bg-white border-end-0">
              <FaEnvelope className="text-primary" />
            </span>
            <input
              type="email"
              className="form-control border-start-0"
              placeholder="Email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div className="mb-3 input-group">
            <span className="input-group-text bg-white border-end-0">
              <FaLock className="text-primary" />
            </span>
            <input
              type="password"
              className="form-control border-start-0"
              placeholder="Password"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          <button className="btn btn-primary w-100" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="text-center mt-3">
          <small className="text-muted">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-primary fw-semibold">Sign Up</Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;
