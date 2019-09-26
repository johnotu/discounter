/**
 * Reusable top navigation component
 */

import React from 'react';
import { User } from 'react-feather';

const TopNav = props => {
  return (
    <nav className="navbar navbar-light bg-light fixed-top flex-md-nowrap p-0">
      <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">
        <h5 className="text-info">Discounter</h5>
      </a>
      <ul className="navbar-nav px-3">
        <li className="nav-item">
          <a className="nav-link" href="/">
            <User className="text-info" />
          </a>
        </li>
      </ul>
      
    </nav>
  );
}

export default TopNav;