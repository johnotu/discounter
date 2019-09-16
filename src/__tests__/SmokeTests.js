import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';

import groups from '../util/groups.json';

import Groups from '../components/Groups';
import Group from '../components/Group';
import Signup from '../components/Signup';
import Analytics from '../components/Analytics';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const components = [
  <Group group={groups[0]} />,
  <Groups groups={groups} />,
  <Signup group={groups[0]} />,
  <Analytics groups={groups} />
];

components.map(component => {
  it('renders without crashing', () => {
    render(<Router>component</Router>, container);
  });
});
