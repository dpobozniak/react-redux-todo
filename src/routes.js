import React from 'react';
import { Route } from 'react-router';

import App from './containers/App';
import Todos from './todos/Todos';
import Home from './home/Home';
import About from './about/About';

export default (
  <div>
    <Route path="/" component={App}>
      <Route path="home" component={Home} />
      <Route path="todos" component={Todos} />
      <Route path="about" component={About} />
    </Route>
  </div>
);
