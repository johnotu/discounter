import React, { useState } from 'react';

import dummyGroups from './groups.json';
import TopNav from './TopNav';
import SideNav from './SideNav';

const Groups = props => {
  const [groups, setGroups] = useState(dummyGroups);

  const totalGroups = groups.length;

  const isActive = group => group.isActive;
  const activeGroups = groups.filter(isActive);
  const totalActiveGroups = activeGroups.length;
  const totalExpiredGroups = totalGroups - totalActiveGroups;
  const totalActiveMembers = activeGroups.reduce((acc, curr) => acc + curr.members.length, 0);
  const totalMembersExpected = activeGroups.reduce((acc, cur) => acc + cur.totalMembers, 0);


  return (
    <div className="admin">
      <TopNav />
      <div className="container-fluid">
        <div className="row">
          <SideNav analyticsActive={true} />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
              <h1 className="h2 text-info">Analytics</h1>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <div class="card text-center mb-4">
                  <div class="card-body">
                    
                    <h5 class="card-title display-4">{totalGroups}</h5>
                    <p class="card-text lead">Total groups</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div class="card text-center mb-4">
                  <div class="card-body">
                    
                    <h5 class="card-title display-4">{totalActiveGroups}</h5>
                    <p class="card-text lead">Active groups</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div class="card text-center mb-4">
                  <div class="card-body">
                    
                    <h5 class="card-title display-4">{totalExpiredGroups}</h5>
                    <p class="card-text lead">Expired groups</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div class="card text-center mb-4">
                  <div class="card-body">
                    
                    <h5 class="card-title display-4">{`${totalActiveMembers}/${totalMembersExpected}`}</h5>
                    <p class="card-text lead">Active groups membership</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Groups;