/**
 * Reusable top navigation component
 */

import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import { Power } from 'react-feather';
import { clearData } from '../util/store'
import Logo from '../images/logo_512x512.png';

const TopNav = props => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const logout = () => {
    clearData('account');
    props.history.push('/login');
  }
  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light py-0">
      
      <a className="navbar-brand text-info font-weight-bolder" href="/">
        <img src={Logo} alt="Logo" width="28px" className="mr-1" />
        Discounter</a>
      <button className={`navbar-toggler custom-toggler ${isNavCollapsed ? 'collapsed' : ''}`} type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded={!isNavCollapsed} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`} id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="/login">Login</a> */}
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="/signup">Create new account</a> */}
          </li>
        </ul>
        <div className="form-inline mt-2 mt-md-0">
          {
            props.home ?
              <ul className="navbar-nav mr-auto">
                {/* <li className="nav-item">
                  <a className="nav-link text-info" href="/contact">Support</a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link text-info" href="/login">Login</a>
                </li>
                <li className="nav-item">
                  <a href="/request-demo" className="btn btn-sm btn-info nav-link text-white" >Request demo</a>
                </li>
              </ul>
              : props.action ? '' :
                <ul className="navbar-nav mr-auto">
                  <a className="nav-link" href="/logout">
                    <Power className="text-info pointer" size={14} onClick={logout} />
                  </a>
                </ul>
          }
          </div>
        </div>
      </nav>
  );
}

export default withRouter(TopNav);