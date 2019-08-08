import React from 'react';

import groups from './groups.json';
import TopNav from './TopNav';
import SideNav from './SideNav';

const Groups = props => {

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
        <h1 className="h2">Groups</h1>
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
              <td>{group.discount_percentage}</td>
              <td>{group.signup_starts}</td>
              <td>{group.signup_ends}</td>
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