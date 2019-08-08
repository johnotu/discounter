import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Discounter from './components/discounter';

const App = () => {
  return (
    <Router>
      <Route path='/' exact component={Discounter} />
    </Router>
  );
}

export default App;