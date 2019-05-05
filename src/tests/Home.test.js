import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from '../components/Home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><Route><Home/></Route></Router>, div);
});
