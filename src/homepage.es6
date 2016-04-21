import React from 'react';
import pageTracker from '@economist/react-i13n-omniture/lib/pagetracker';
import Impart from '@economist/component-react-async-container';
import cache from '@economist/component-react-async-container/cache';
import fetch from 'isomorphic-fetch';
import handleLoading from './loading-handler';
import handleFailure from './failure-handler';

function fetchHomepage() {
  return fetch('/api/homepage').then((response) => (response.json()));
}

function cacheHomepage() {
  return cache('/api/homepage');
}

export function Homepage() {
  return (
    <h1>hello world</h1>
  );
}

const TrackedHomepage = pageTracker(Homepage, {
  template: 'channel',
});
export default function HomepageWithData(props) {
  return (
    <Impart.RootContainer
      {...props}
      Component={TrackedHomepage}
      cache={cacheHomepage}
      route={fetchHomepage}
      renderLoading={handleLoading}
      renderFailure={handleFailure}
    />
  );
}
