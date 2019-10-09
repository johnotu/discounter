/**
 * Groups component to display all groups and some important detail
 */

import React from 'react';
// import { Link } from 'react-router-dom';
import TopNav from './TopNav';
import Ill from '../images/process.svg';

const Home = props => {

  return (
    <div className="admin bg-light" style={{height: '100vh'}}>
      <TopNav home />
      <div className="container-fluid">
        <div className="row">
          <main role="main">
            <div className="home-content">
              <div className="row">
                <div className="col-md-6">
                  <div className="landing-text">
                    <h1 className="text-align-left heading">Group discount manager for marketers</h1>
                    <p className="lead">
                      {/* Do you offer group discounts for your goods or services? */}
                      Discounter makes it easy to set up and manage group discounts from start to finish.</p>
                    <a href="/request-demo" className="btn btn-info btn-lg">Request a demo</a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="landing-image">
                    <img src={Ill} alt="Illustration" width="80%" />
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

export default Home;