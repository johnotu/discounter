import React from 'react';

const Signup = () => {
  return (
    <div>
      <p className="lead account-action-notice">Already have an account? <a href="/login" className="btn btn-info">Login</a></p>
      {/* <h4 className="my-4">Create an account</h4> */}
      <div className="form-group">
        <label htmlFor="adminFirstName">First name</label>
        <input className="form-control" type="text" name="adminFirstName" id="adminFirstName" />
      </div>
      <div className="form-group">
        <label htmlFor="adminLastName">Last name</label>
        <input className="form-control" type="text" name="adminLastName" id="adminLastName" />
      </div>
      <div className="form-group">
        <label htmlFor="adminEmail">Email</label>
        <input className="form-control" type="email" name="adminEmail" id="adminEmail" />
      </div>
      <div className="form-group">
        <label htmlFor="adminPassword">Password</label>
        <input className="form-control" type="password" name="adminPassword" id="adminPassword" />
      </div>
      <div className="form-group">
        <label htmlFor="name">Company/Organisation name</label>
        <input className="form-control" type="text" name="name" id="name" />
      </div>
      <button className="btn btn-info btn-lg btn-block mt-4">Signup</button>
    </div>
                  
  );
}

export default Signup;