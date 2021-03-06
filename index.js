import { Provider } from 'react-redux';
import { render } from 'react-dom';
import AppComponent from './app-root/component'
import configureStore from './configure-store'
import initState from './init-state'
import React from 'react';

const $root = document.getElementById('root');

const store = configureStore(initState);

render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  $root
);

window.$s = store;
