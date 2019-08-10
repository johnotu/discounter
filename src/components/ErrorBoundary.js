/**
 * Error boundary component to catch JavaScript errors in children components.
 */

import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Manage state to support fallback UI render
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Take user back to home from error page
  handleButtonClick = () => {
    this.props.history.push('/');
  } 

  // Log caught error to console
  componentDidCatch(error, info) {
    console.error(error, info);
  }

  // render fallback UI when an error has been caught
  render() {
    if (this.state.hasError) {
      return (
        <div className="container-fluid bg-light justify-content-center align-items-center" style={{ height: '100vh' }}>
          <span role="img" aria-labelledby="Sad face emoji">😰</span>
          <h1 className="display-3">Oops! Something went wrong</h1>
          <button className="btn btn-info" onClick={this.handleButtonClick}>Go back to app</button>
        </div>
      )
    }

    return this.props.children;
  }
}