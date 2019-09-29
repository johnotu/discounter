import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import {setData} from '../../util/store';

const Login = props => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleChange = e => {
    e.preventDefault();
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  const handleSubmit = () => axios(`${process.env.REACT_APP_API_SERVER_URL}/login`, {
    headers: { 'content-type': 'application/json' },
    method: 'post',
    data: loginData
  })
    .then(response => {
      if (response.status === 200) {
        // Store account data in local storage
        setData('account', response.data.account);
        // Redirect to /groups
        props.history.push('/groups');
      }
    })
    .catch(err => {
      // send error toast message

      // log error to console
      console.error('error loggin in', err)
    });

  return (
    <div>
      <p className="account-action-notice">Don't have an account? <a href="signup" className="btn btn-outline-info btn-sm">Signup</a></p>
      <h4 className="my-4">Login to your account</h4>
      <form>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input className="form-control" type="email" name="email" id="email" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input className="form-control" type="password" name="password" id="password" onChange={handleChange} />
        </div>
      </form>
        <button className="btn btn-outline-info btn-block mt-4" onClick={handleSubmit
        }>Login</button>
      
    </div>
  );
}

export default withRouter(Login);