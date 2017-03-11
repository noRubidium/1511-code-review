import io from 'socket.io-client';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/codeDisplay';
import store from './store';
import { fetchCode } from './actions/code';

store.dispatch(fetchCode('code.c'));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));
