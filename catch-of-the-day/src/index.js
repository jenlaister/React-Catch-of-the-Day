import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import './css/style.css';
import App from './components/App';

import StorePicker from './components/StorePicker';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
      <Match extactly pattern='/' component={ StorePicker }/>
      <Match pattern='/store/:storeId' component={ App }/>
      <Miss component={ NotFound } />
    </div>
      <BrowserRouter/>
  )
}


render(<App />, document.querySelector('#main'));
