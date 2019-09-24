/**
 * App component to manage routing and hold groups data in state
 */

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Get dummy groups daata
import groups from './util/groups.json';

import Groups from './components/Groups';
import Group from './components/Group';
import Signup from './components/Signup';
import Analytics from './components/Analytics';
import NewGroup from './components/NewGroup';
import ErrorBoundary from './components/ErrorBoundary';
// import AccountSignup from './components/AccountSignup';

const App = () => {
  return (
    <ErrorBoundary>
    <Router>
      <Route path='/' exact render={props =>  <Groups {...props} groups={groups} />} />
      <Route path='/group' exact render={props => <Groups {...props} groups={groups} />} />
        <Route path='/group/:id' exact render={props => <Group {...props} group={groups.find(group => group.id === props.match.params.id)} />} />
        <Route path='/group-signup/:id' exact render={props => <Signup {...props} group={groups.find(group => group.id === props.match.params.id)} />} />
      <Route path='/analytics' exact render={props => <Analytics {...props} groups={groups} />} />
        <Route path='/new-group' exact component={NewGroup} />
        {/* <Route path='/signup' exact render component={AccountSignup} /> */}
      </Router>
    </ErrorBoundary>
  );
}

export default App;