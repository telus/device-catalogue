import React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/components/App';
import CSSReset from '@tds/core-css-reset';

ReactDOM.render(
  <>
<CSSReset />
  <App />
  </>,
  document.getElementById('root')
);

