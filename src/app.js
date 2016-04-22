import React from 'react';
import HeaderWithData from './header';
import FooterWithData from './footer';
import Cookie from '@economist/component-cookie-message';
import CaptureClicks from './capture-clicks';

export default function AppTemplate({
  children = null,
} = {}) {
  return (
    <CaptureClicks>
      <HeaderWithData />
      {children}
      <FooterWithData />
      <Cookie />
    </CaptureClicks>
  );
}

if (process.env.NODE_ENV !== 'production') {
  AppTemplate.propTypes = {
    children: React.PropTypes.node,
  };
}
