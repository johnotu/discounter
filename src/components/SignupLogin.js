import React, { useState } from 'react';

import TopNav from './TopNav';
import Login from './forms/Login';
import Signup from './forms/Signup';

const AccountSignup = props => {
  const [action] = useState(props.action);
  return (
    <div className="admin">
      <TopNav action />
    <main role="main">
    <div className="container py-5">
      <div className="row">
        <div className="col-md-7"></div>
        <div className="col-md-5">
              {action === 'signup' ? <Signup /> : <Login /> }
        </div>
      </div>
      </div>
      
        </main>
    </div>
  )
}

export default AccountSignup;