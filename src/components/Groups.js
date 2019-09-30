/**
 * Groups component to display all groups and some important detail
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getData } from '../util/store';

// Other components
import TopNav from './TopNav';
import SideNav from './SideNav';

const Groups = props => {
  const account = getData('account');
  
  const [groups, setGroups] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_SERVER_URL}/group`, {
      headers: { token: account.token },
      method: 'get'
    })
      .then(response => {
        setIsLoading(false);
        if (response.status === 200) {
          
          setGroups(response.data.groups);
        }
      })
      .catch(err => console.error('error getting groups', err));
  }, [account.token]);
  // Open a particular group data on-click
  const handleGroupClick = id => {
    props.history.push(`/groups/${id}`);
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
              <Link to="/new-group" className="btn btn-outline-info btn-sm">New group</Link>
            </div>
            {
              isLoading ? <h4>Getting groups...</h4> :
              
                !groups ? <h5>There are no groups yet. Please create a group with the button above</h5> :
            
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Discount (%)</th>
                        <th scope="col">Status</th>
                        {/* <th scope="col">Membership</th> */}
                        <th scope="col">Start date</th>
                        <th scope="col">End date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        groups.map((group, index) => (
                          <tr key={group._id} style={{ cursor: 'pointer' }} onClick={() => handleGroupClick(`${group._id}`)}>
                            <th scope="row">{index + 1}</th>
                            <td>{group.name}</td>
                            <td>{group.discountPercentage}</td>
                            <td>{group.status}</td>
                            {/* <td>{`${group.members.length}/${group.totalMembers}`}</td> */}
                            <td>{group.signupStarts}</td>
                            <td>{group.signupEnds}</td>
                          </tr>
                        ))
                      }

                    </tbody>
                  </table>
            }
          </main>
        </div>
      </div>
    </div>
  );
}

export default Groups;