import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import TopNav from './components/TopNav';
import SideNav from './components/SideNav';
import Groups from './components/Groups';
import Group from './components/Group';

const App = () => {
  return (
    <Router>
      <TopNav />
      <div className="container-fluid">
        <div className="row">
          <SideNav />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <Route path='/' exact component={Groups} />
            <Route path='/group/:id' exact component={Group} />
          </main>
        </div>
      </div>
      
    </Router>
  );
}

export default App;