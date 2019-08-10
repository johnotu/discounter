/**
 * Reusable side navigation component with active link props
 */

import React from 'react';

const SideNav = props => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className={`nav-link text-info ${props.groupsActive ? 'active' : ''}`} href="/">Groups</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link text-info ${props.analyticsActive ? 'active' : ''}`} href="/analytics">
              Analytics
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SideNav;