/**
 * Group component to display a single group detail including a list of current membership
 */

import React, { useState } from 'react';
import { Chart } from 'react-google-charts';

// Get other components
import TopNav from './TopNav';
import SideNav from './SideNav';

const Group = props => {
  // State to hold group and chart data
  const [group] = useState(props.group);
  const [chartData] = useState([
    ['Members', 'Number'],
    ['Members', group.members.length],
    ['Empty slots', group.totalMembers - group.members.length]
  ]);

  // Send reminder email on button click
  const handleReminderEmail = () => {
    /**
     * Send templated reminder email to group members
     */
    alert('An email has been sent to current group members');
  }

  // Send discount email on button click. Discount code is generated and activated server side
  const handleDiscountEmail = () => {
    /**
     * Generate discount code, enable on shop backend and send templated email to group members to purchase
     */
    alert('An email has been sent to current group members');
  }

  return (
    <div className="admin">
      <TopNav />
      <div className="container-fluid">
        <div className="row">
          <SideNav />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
              <h1 className="h2">{group.name}</h1>
              <div>
              <button className="btn btn-outline-info btn-sm mr-2" disabled={group.totalMembers === group.members.length || !group.isActive ? true : false} onClick={handleReminderEmail} >Trigger reminder email</button>
                <button className="btn btn-outline-info btn-sm" disabled={Date.now() >= new Date(group.signupEnds).getTime() ? false : true} onClick={handleDiscountEmail} >Send discount codes</button>
              </div>
            </div>
            
            <div className="row align-items-center justify-content-center">
              <div className="col">
                <Chart
                  width={'500px'}
                  height={'200px'}
                  chartType="PieChart"
                  loader={<div>Loading Chart</div>}
                  data={chartData}
                  options={{
                    // legend: 'none',
                    pieSliceText: 'none',
                    // pieStartAngle: 135,
                    tooltip: { trigger: 'none' },
                    slices: {
                      0: { color: '#17a2b8' },
                      1: { color: '#dee2e6' },
                    },
                  }}
                  rootProps={{ 'data-testid': '6' }}
                />
              </div>

              <div className="col">
                <h5 >Status: <span className={group.isActive ? 'text-info' : 'text-danger'}>{group.isActive ? 'Active' : 'Expired'}</span></h5>
                {group.isActive ? '' : <h5>Discount code: {group.discountCode}</h5>}
                <p className="">Starts: {group.signupStarts}</p>
                <p>Ends: {group.signupEnds}</p>
                <p>Signup link: <a href={group.signupUrl} className="text-decoration-none" target="_blank" rel="noopener noreferrer">{group.signupUrl}</a></p>
              </div>
            </div>
            
            <h5>Members</h5>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First name</th>
                  <th scope="col">Last name</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                {
                  group.members.map((member, index) => (
                    <tr key={member.id} >
                      <th scope="row">{index + 1}</th>
                      <td>{member.firstName}</td>
                      <td>{member.lastName}</td>
                      <td>{member.email}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Group;