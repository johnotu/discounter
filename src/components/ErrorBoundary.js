import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container-fluid bg-light justify-content-center align-items-center" style={{height: '100vh'}}>
          <span role="img" aria-labelledby="Sad face emoji">😰</span>
          <h1 className="display-3">Oops! Something went wrong</h1>
          <button className="btn btn-info">Go back to app</button>
        </div>
      )
    }

    return this.props.children;
  }
}