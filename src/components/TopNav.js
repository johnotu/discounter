/**
 * Reusable top navigation component
 */

import React from 'react';

const TopNav = props => {
  return (
    <nav className="navbar navbar-light fixed-top bg-info flex-md-nowrap p-0">
      <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/"><h5 className="text-white">Discounter</h5></a>
    </nav>
  );
}

export default TopNav;