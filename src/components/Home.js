/**
 * Groups component to display all groups and some important detail
 */

import React from 'react';
// import { Link } from 'react-router-dom';
import TopNav from './TopNav';

const Home = props => {

  return (
    <div className="admin">
      <TopNav home />
      <div className="container-fluid">
        <div className="row">
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            
          </main>
        </div>
      </div>
    </div>
  );
}

export default Home;