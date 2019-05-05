import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Index from '../components/Index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><Route><Index/></Route></Router>, div);
});
