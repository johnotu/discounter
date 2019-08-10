/**
 * Groups component to display all groups and some important detail
 */

import React from 'react';
import { Link } from 'react-router-dom';

// Get dummy groups data
import groups from './groups.json';

// Other components
import TopNav from './TopNav';
import SideNav from './SideNav';

const Groups = props => {
  // Open a particular group data on-click
  const handleGroupClick = id => {
    props.history.push(`/group/${id}`);
  }
  
  return (
    <div className="admin">
      <TopNav />
      <div className="container-fluid">
        <div className="row">
          <SideNav groupsActive={true} />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
              <h1 className="h2 text-info">Groups</h1>
              <Link to="/new-group" className="btn btn-info">New group</Link>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Discount (%)</th>
                  <th scope="col">Starts</th>
                  <th scope="col">Ends</th>
                </tr>
              </thead>
              <tbody>
                {
                  groups.map((group, index) => (
                    <tr key={group.id} style={{ cursor: 'pointer' }} onClick={() => handleGroupClick(`${group.id}`)}>
                      <th scope="row">{index + 1}</th>
                      <td>{group.name}</td>
                      <td>{group.discountPercentage}</td>
                      <td>{group.signupStarts}</td>
                      <td>{group.signupEnds}</td>
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

export default Groups;