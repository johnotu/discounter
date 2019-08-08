import React, { useState } from 'react';
import { Chart } from 'react-google-charts';

import groups from './groups.json';
import TopNav from './TopNav';
import SideNav from './SideNav';

const Group = props => {

  const [group, setGroup] = useState(groups.find(discount => discount.id === props.match.params.id));
  const [chartData, setChartData] = useState([
    ['Members', 'Number'],
    ['Members', group.members.length],
    ['Empty slots', group.totalMembers - group.members.length]
  ]);

  const handleTriggerEmail = () => {
    /**
     * Send templated email to group members
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
              <button className="btn btn-info" disabled={group.totalMembers === group.members.length ? true : false} onClick={handleTriggerEmail} >Trigger Email</button>
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