/**
 * Reusable top navigation component
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import { Power } from 'react-feather';
import { clearData } from '../util/store'

const TopNav = props => {
  const logout = () => {
    clearData('account');
    props.history.push('/login');
  }
  return (
    <nav className="navbar navbar-light bg-light fixed-top flex-md-nowrap p-0">
      <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">
        <h5 className="text-info">Discounter</h5>
      </a>
      <ul className="navbar-nav px-3">
        <li className="nav-item">
          {/* <a className="nav-link" href="/logout"> */}
            <Power className="text-info pointer" size={14} onClick={logout} />
          {/* </a> */}
        </li>
      </ul>
      
    </nav>
  );
}

export default withRouter(TopNav);