import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Groups from './components/Groups';
import Group from './components/Group';
import Signup from './components/Signup';

const App = () => {
  return (
    <Router>
      <Route path='/' exact component={Groups} />
      <Route path='/:id' exact component={Group} />
      <Route path='/signup/:id' exact component={Signup} />
    </Router>
  );
}

export default App;