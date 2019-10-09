import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { setData } from '../../util/store';

const RequestDemo = props => {
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    // password: '',
    organisationName: '',
    organisationDescription: '',
    organisationLocation: ''
  });

  const handleChange = e => {
    e.preventDefault();
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  }

  const handleSubmit = () => {
    axios(`${process.env.REACT_APP_API_SERVER_URL}/account`, {
      headers: { 'content-type': 'application/json' },
      method: 'post',
      data: signupData
    })
      .then(response => {
        if (response.status === 201) {
          // set account data in localstore
          setData('account', response.data.account);

          // redirect to /groups
          props.history.push('/groups');
        } else {
          // send a toast message for error signing up
        }
      })
      .catch(err => {
        console.error('error signing up', err);

        // send a toast message, retry connection
      });
  }

  return (
    <div>
      <form>
        {/* <p className="account-action-notice">Already have an account? <a href="/login" className="btn btn-outline-info btn-sm">Login</a></p> */}
        <h4 className="my-4">Request a demo</h4>
        <div className="form-group">
          <label htmlFor="firstName">First name</label>
          <input className="form-control" type="text" name="firstName" id="firstName" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last name</label>
          <input className="form-control" type="text" name="lastName" id="lastName" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input className="form-control" type="email" name="email" id="email" onChange={handleChange} />
        </div>
        {/* <div className="form-group">
          <label htmlFor="password">Password</label>
          <input className="form-control" type="password" name="password" id="password" onChange={handleChange} />
        </div> */}
        <div className="form-group">
          <label htmlFor="organisationName">Company/Organisation name</label>
          <input className="form-control" type="text" name="organisationName" id="organisationName" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="organisationName">Company/Organisation description</label>
          <input className="form-control" type="text" name="organisationName" id="organisationName" onChange={handleChange} />
        </div>
      </form>
      <button className="btn btn-outline-info btn-block mt-4" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default withRouter(RequestDemo);