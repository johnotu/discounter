import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Groups from './components/Groups';
import Group from './components/Group';
import Signup from './components/Signup';
import Analytics from './components/Analytics';
import NewGroup from './components/NewGroup';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
    <Router>
      <Route path='/' exact component={Groups} />
      <Route path='/group' exact component={Groups} />
      <Route path='/group/:id' exact component={Group} />
      <Route path='/signup/:id' exact component={Signup} />
      <Route path='/analytics' exact component={Analytics} />
      <Route path='/new-group' exact component={NewGroup} />
      </Router>
    </ErrorBoundary>
  );
}

export default App;