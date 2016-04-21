import React from 'react';
// import Header from '@economist/component-header';
// import Footer from '@economist/component-footer';
import Cookie from '@economist/component-cookie-message';
import CaptureClicks from './capture-clicks';

export default function AppTemplate({
  children = null,
} = {}) {
  return (
    <CaptureClicks>
      <header>Header</header>
      {children}
      <footer>Footer</footer>
      <Cookie />
    </CaptureClicks>
  );
}

if (process.env.NODE_ENV !== 'production') {
  AppTemplate.propTypes = {
    children: React.PropTypes.node,
  };
}
