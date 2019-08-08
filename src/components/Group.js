import React from 'react';

import groups from './groups.json';
import TopNav from './TopNav';
import SideNav from './SideNav';

const Group = props => {
  const group = groups.find(discount => discount.id === props.match.params.id);
  return (
    <div className="admin">
      <TopNav />
      <div className="container-fluid">
        <div className="row">
          <SideNav />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
              <h1 className="h2">{group.name}</h1>
            </div>
            <h5 >Status: <span className={group.isActive ? 'text-info' : 'text-danger'}>{group.isActive ? 'Active' : 'Expired'}</span></h5>
            {group.isActive ? '' : <h5>Discount code: {group.discountCode}</h5>}
            <p className="">Starts: {group.signupStarts}</p>
            <p>Ends: {group.signupEnds}</p>
            <p>Signup link: <a href={group.signupUrl} className="text-decoration-none" target="_blank" rel="noopener noreferrer">{group.signupUrl}</a></p>
      
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