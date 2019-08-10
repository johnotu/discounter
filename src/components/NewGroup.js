/**
 * NewGroup component to display form for creating a new discount group
 */

import React, { useState } from 'react';

// Other dependent components
import TopNav from './TopNav';
import SideNav from './SideNav';

const NewGroup = props => {
  // Hold new group input data in state
  const [groupData, setGroupData] = useState({
    name: '',
    signupStarts: new Date().toISOString().slice(0, 10), // Set today's date in input format
    signupEnds: new Date().toISOString().slice(0, 10), // Set today's date in input format
    totalMembers: 10, // Set smallest group number as default
    discountPercentage: 10 // Set smallest group discount percentage as default
  });

  // Manage group input in state onchange. On function to manage them all :)
  const handleGroupInputChange = e => {
    e.preventDefault();
    setGroupData({
      ...groupData, [e.target.name]: e.target.value
    });
  }

  // Send new group data to API on-click
  // Note that on the backend, we assume that:
  // 1. isActive property is set to true by default.
  // 2. On successfully creating a new group member:
  // // (a) A cron job is scheduled to run on signupEnds date to automate discount code generation and activation and send discount emails to group members.
  // // (b) signupUrl is generated in the format '<SERVER_BASE_URL>/signup/<GROUP_ID' and gorup data is updated.
  const handleGroupDataSubmit = () => {
    /**
     * send data to backend via API
     */

    // Send user to all groups page
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