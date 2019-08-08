import React, { useState } from 'react';

import TopNav from './TopNav';
import SideNav from './SideNav';

const NewGroup = props => {
  const [groupData, setGroupData] = useState({
    name: '',
    signupStarts: new Date().toISOString().slice(0, 10),
    signupEnds: new Date().toISOString().slice(0, 10),
    totalMembers: 10,
    discountPercentage: 10
  });

  const handleGroupInputChange = e => {
    e.preventDefault();
    setGroupData({
      ...groupData, [e.target.name]: e.target.value
    });
  }

  const handleGroupDataSubmit = () => {
    /**
     * send data to backend via API
     */

    props.history.push('/group');
  }

  return (
    <div className="admin">
      <TopNav />
      <div className="container-fluid">
        <div className="row">
          <SideNav groupsActive={true} />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
              <h1 className="h2">New Group</h1>
            </div>
            <div className="form-group mb-2">
              <label htmlFor="name" className="">Name</label>
              <input type="text" className="form-control" id="name" name="name" onChange={handleGroupInputChange} value={groupData.name} />
            </div>
            <div className="row">
            <div className="form-group mb-2 col">
              <label htmlFor="signup_starts" className="">Signup starts</label>
                <input type="date" className="form-control" id="signup_starts" name="signupStarts" min={new Date().toISOString().slice(0, 10)} onChange={handleGroupInputChange} value={groupData.signupStarts} />
              </div>
              <div className="form-group mb-2 col">
                <label htmlFor="signup_ends" className="">Signup ends</label>
                <input type="date" className="form-control" id="signup_ends" name="signupEnds" min={new Date().toISOString().slice(0, 10)} onChange={handleGroupInputChange} value={groupData.signupEnds} />
              </div>
              <div className="form-group mb-2 col">
                <label htmlFor="target_member_total" className="">Total members</label>
                <input type="number" className="form-control" id="target_member_total" name="totalMembers" min="10" onChange={handleGroupInputChange} value={groupData.totalMembers} />
              </div>
              <div className="form-group mb-2 col">
                <label htmlFor="discount_percentage" className="">Discount percentage %</label>
                <input type="number" className="form-control" id="discount_percentage" name="discountPercentage" min="10" max="50" step="10" onChange={handleGroupInputChange} value={groupData.discountPercentage} />
              </div>
            </div>
            <button className="btn btn-info my-4" onClick={handleGroupDataSubmit}>Create new group</button>
          </main>
        </div>
      </div>
    </div>
  );
}

export default NewGroup;