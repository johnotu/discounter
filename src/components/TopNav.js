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
    <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light py-0">
      
      <a class="navbar-brand text-info font-weight-bolder" href="/">
        <img src={Logo} alt="Logo" width="28px" className="mr-1" />
        Discounter</a>
      <button class={`navbar-toggler custom-toggler ${isNavCollapsed ? 'collapsed' : ''}`} type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded={!isNavCollapsed} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`} id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
          </li>
          <li class="nav-item">
            {/* <a class="nav-link" href="/login">Login</a> */}
          </li>
          <li class="nav-item">
            {/* <a class="nav-link" href="/signup">Create new account</a> */}
          </li>
        </ul>
        <div class="form-inline mt-2 mt-md-0">
          {
            props.home ?
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <a class="nav-link text-info" href="/contact">Support</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-info" href="/login">Login</a>
                </li>
                <li class="nav-item">
                  <a href="/signup" class="btn btn-sm btn-info my-sm-0 nav-link text-white" >Create free account</a>
                </li>
              </ul>
              : props.action ? '' :
                <ul class="navbar-nav mr-auto">
                  <a className="nav-link" href="/logout">
                    <Power className="text-info pointer" size={14} onClick={logout} />
                  </a>
                </ul>
          }
          
            
          </div>
        </div>
      </nav>


    // <div class="d-flex flex-column flex-md-row align-items-center p-2 px-md-4 mb-3 bg-white border-bottom box-shadow">
    //   <img src={Logo} alt="Logo" width="24px" className="mr-2" />
    //   <h5 class="my-0 mr-md-auto font-weight-normal text-info">Discounter</h5>
    //   <nav class="my-2 my-md-0 mr-md-3">
    //     <a class="p-2 text-info" href="/contact">Support</a>
    //     <a class="p-2 text-info" href="/login">Login</a>
    //   </nav>
    //   <a class="btn btn-sm btn-info" href="/signup">Create free account</a>
    // </div>


    // <nav className="navbar navbar-light bg-light fixed-top flex-md-nowrap p-0">
    //   <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">
    //     <h5 className="text-info">Discounter</h5>
    //   </a>
      
    //     {
    //     props.home ? 
    //       <ul className="navbar-nav px-3">
    //         <li className="nav-item text-nowrap">
    //           <a className="nav-link" href="/login">Login</a>
    //         </li>
    //         <li className="nav-item text-nowrap">
    //           <a className="nav-link" href="/sinup">Create free account</a>
    //         </li>
    //       </ul>
    //         :
    //         <ul className="navbar-nav px-3">
    //         <li className="nav-item">
    //           {/* <a className="nav-link" href="/logout"> */}
    //           <Power className="text-info pointer" size={14} onClick={logout} />
    //           {/* </a> */}
    //       </li>
    //     </ul>
    //     }
      
      
    // </nav>
  );
}

export default withRouter(TopNav);