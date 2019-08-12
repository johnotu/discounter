/**
 * Smoke test for all components
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Analytics from './Analytics';
import Group from './Group';
import Groups from './Groups';
import NewGroup from './NewGroup';
import SideNav from './SideNav';
import Signup from './Signup';
import TopNav from './TopNav';

import groups from '../util/groups.json';

const components = [<Analytics groups={groups} />, <Group group={groups[0]} />, <Groups groups={groups} />, <NewGroup />, <SideNav />, <Signup group={groups[0]} />, <TopNav />];

components.map(component => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router>{component}</Router>, div);
  });
});
