import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './Components/App';
import Reproductive from './Components/Reproductive';

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
    <Route path="/:videoId" component={Reproductive} />
  </Router>, 
  document.getElementById('container'))