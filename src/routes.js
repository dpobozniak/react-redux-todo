import React from 'react';
import { Route } from 'react-router';

import Home from './components/Home';
import About from './components/About';

export default (
  <div>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
  </div>
);
