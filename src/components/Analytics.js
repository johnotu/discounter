import React from 'react';

// import groups from './groups.json';
import TopNav from './TopNav';
import SideNav from './SideNav';

const Groups = props => {
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
          </main>
        </div>
      </div>
    </div>
  );
}

export default Groups;