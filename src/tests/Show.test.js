import React from 'react';
import ReactDOM from 'react-dom';

import Show from '../components/Show';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Show match={{params: {chargeId: '1'}}}/>, div);
});
