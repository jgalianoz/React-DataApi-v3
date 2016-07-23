import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './Components/App';
import Reproductive from './Components/reproductive';

render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/video/:videoId" component={Reproductive} />
  </Router>, 
  document.getElementById('container'))