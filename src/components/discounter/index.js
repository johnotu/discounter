import React from 'react';

import TopNav from './TopNav';
import SideNav from './SideNav';
import Groups from './Groups';

const Discounter = props => {
  return (
    <div>
      <TopNav />

        <div class="container-fluid">
          <div class="row">
            <SideNav />

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
              <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                <h1 class="h2">Groups</h1>
              </div>
              <Groups />
            </main>
          </div>
        </div>
    </div>
  );
}

export default Discounter;