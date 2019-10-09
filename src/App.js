/**
 * App component to manage routing and hold groups data in state
 */

import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// Get dummy groups daata
import groups from './util/groups.json';

import Groups from './components/Groups';
import Group from './components/Group';
import GroupSignup from './components/GroupSignup';
import Analytics from './components/Analytics';
import NewGroup from './components/NewGroup';
import ErrorBoundary from './components/ErrorBoundary';
import SignupLogin from './components/SignupLogin';
import Home from './components/Home';

import { getData } from './util/store';

const App = () => {
  const account = getData('account');
  return (
    <ErrorBoundary>
    <Router>
        <Route path='/' exact component={Home} />
        {/* <Route path='/groups' exact render={props => <Groups {...props} groups={groups} />} /> */}
        <Route path='/groups' exact ender={props => account ? <Groups {...props} groups={groups} /> : <Redirect to="/login" />} />
        <Route path='/groups/:id' exact render={props => <Group {...props} group={groups.find(group => group.id === props.match.params.id)} />} />
        <Route path='/group-signup/:id' exact render={props => <GroupSignup {...props} group={groups.find(group => group.id === props.match.params.id)} />} />
      <Route path='/analytics' exact render={props => <Analytics {...props} groups={groups} />} />
        <Route path='/new-group' exact component={NewGroup} />
        {/* <Route path='/signup' exact render={props => <SignupLogin {...props} action='signup' />} /> */}
        <Route path='/request-demo' exact render={props => <SignupLogin {...props} action='request-demo' />} />
        <Route path='/login' exact render={props => <SignupLogin {...props} action='login' />} />
      </Router>
    </ErrorBoundary>
  );
}

export default App;