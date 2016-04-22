/* eslint-env browser */
require('svg4everybody')();
import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { createRoutesFromReactChildren } from 'react-router/lib/RouteUtils';
import Routes from './routes';
/* eslint-disable id-match */
import { setupI13n } from 'react-i13n';
import ReactI13nOmniture from '@economist/react-i13n-omniture';
import OmnitureConfig from './omniture-config';
/* eslint-enable id-match */

const routes = createRoutesFromReactChildren([
  Routes,
]);
function App() {
  return (
    <Router history={browserHistory} routes={routes} />
  );
}

const TrackedApp = setupI13n(App, {
  rootModelData: {
    product: 'The World If',
  },
  isViewportEnabled: true,
}, [ new ReactI13nOmniture(OmnitureConfig) ]);

const root = document.body;
ReactDom.render(React.createElement(TrackedApp, {
  path: window.location.pathname,
}), root);
