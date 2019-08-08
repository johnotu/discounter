import React, { useState } from 'react';

import groups from './groups.json';

const Signup = props => {
  const group = groups.find(discount => discount.id === props.match.params.id);

  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleSignupInputChange = e => {
    e.preventDefault();
    setSignupData({
      ...signupData, [e.target.name]: e.target.value
    });
  }

  const handleSignupDataSubmit = () => {
    //validate email
    if (!isEmailValid(signupData.email)) {
      return alert('Something seems to be wrong with your email. Please check again');
    } else {
    
      /**
       * Send signup data to backend via API
       */

      alert('Thank you for signing for group discounts on DISCOUNTER!. Check you email for confirmation and next steps');
    }
  }

  const isEmailValid = email => {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }

  return (
    <div className="signup">
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
          <h1 className="display-3 text-center text-info">{group.name}</h1>
          <h3 className="text-center my-5 text-info">Total in group: {group.members.length}</h3>
            </div>
        </div>
        
        <div className="container">
          <div className="row my-5">
          <div className="col-md-6 px-5">
            <h2 className="my-5">How does it work?</h2>
            <p className="lead" style={{ fontSize: '24px' }}>Add your name to the group by midnight <span className="font-weight-bold">{new Date(group.signup_ends).toDateString()}</span>. After the deadline, once we have reached <span>{group.target_member_total}</span> sign-ups, we will open the group discount for you to purchase your discounted access! </p>
            <div className="row my-5">
            <div className="col-md-4">
              <p className="text-info lead font-weight-bold">{group.target_member_total}</p>
            </div>
            <div className="col-md-4">
              <p className="lead font-weight-bold">person group </p>
            </div>
            <div className="col-md-4">
              <p className="text-info lead font-weight-bold float-right">{group.discount_percentage}%</p>
              </div>
            </div>

            <h5>Regular price for Plus plan:</h5>
              <p>$235 <span className="float-right">6 months</span></p>
              <p>$365 <span className="float-right">For 12 months</span></p>
              <p>$123 <span className="float-right">3 months</span></p>
          </div>

          <div className="col-md-6 px-5">
            <h2 className="my-5">Sign me up!</h2>
            <div className="row">
            <div className="col-md-6 form-group mb-2">
              <label htmlFor="firstname" className="">First name</label>
              <input type="text" className="form-control" id="firstname" name="firstName" value={signupData.firstName} onChange={handleSignupInputChange} />
            </div>
            <div className="col-md-6 form-group mb-2">
                <label htmlFor="lastname" className="">Last name</label>
                
              <input type="text" className="form-control" id="lastname" name="lastName" value={signupData.lastName} onChange={handleSignupInputChange} />
              </div>
              
            </div>
            <div className="form-group mb-2">
              <label htmlFor="email" className="">Email</label>
              <input type="email" className="form-control" id="email" name="email" value={signupData.email} onChange={handleSignupInputChange} />
              <small>Please enter your DISCOUNTER email address if available</small>
            </div>
            
            <button type="submit" className="btn btn-info mb-2 btn-block mt-4" onClick={handleSignupDataSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;