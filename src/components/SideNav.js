/**
 * Reusable side navigation component with active link props
 */

import React from 'react';
import { Users, BarChart } from 'react-feather';

const SideNav = props => {
  return (
    <nav className="col-md-2 d-none d-md-block sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className={`nav-link ${props.groupsActive ? 'active' : ''}`} href="/groups">
              <Users size={14} style={{ marginRight: '10', verticalAlign: '-2px' }} /> Groups</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${props.analyticsActive ? 'active' : ''}`} href="/analytics">
              <BarChart size={14} style={{ marginRight: '10', verticalAlign: '-2px'}} />Analytics
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SideNav;