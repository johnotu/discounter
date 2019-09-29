import React from 'react';

const Login = () => {
  
  return (
    <div>
      <p className="account-action-notice">Don't have an account? <a href="signup" className="btn btn-outline-info btn-sm">Signup</a></p>
      <h4 className="my-4">Login to your account</h4>

      <div className="form-group">
        <label htmlFor="adminEmail">Email</label>
        <input className="form-control" type="email" name="adminEmail" id="adminEmail" />
      </div>
      <div className="form-group">
        <label htmlFor="adminPassword">Password</label>
        <input className="form-control" type="password" name="adminPassword" id="adminPassword" />
      </div>

      <button className="btn btn-outline-info btn-block mt-4">Login</button>
    </div>
  );
}

export default Login;