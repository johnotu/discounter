import React from 'react';

const SideNav = props => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="/">
              <span data-feather="home"></span>
              Groups <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/analytics">
              {/* <span data-feather="file"></span> */}
              Analytics
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SideNav;