/* eslint-env browser */
import React from 'react';
import urllite from 'urllite';

export default class CaptureClicks extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  navigate(url) {
    const { router } = this.context;
    router.push(url);
  }

  onClick(event) {
    if (this.props.onClick) {
      this.props.onClick(event);
    }

    if (event.defaultPrevented) {
      return;
    }

    if (event.button !== 0) {
      return;
    }

    let element = event.target;
    while (element && element.nodeName !== 'A') {
      element = element.parentNode;
    }

    if (!element) {
      return;
    }

    if (element.target && element.target !== '_self') {
      return;
    }

    if (element.attributes.download) {
      return;
    }

    const url = urllite(element.href);
    const windowUrl = urllite(window.location.href);
    if (url.protocol !== windowUrl.protocol || url.host !== windowUrl.host) {
      return;
    }

    event.preventDefault();
    const urlWithOptionalHash = `${url.pathname}${url.hash}`;
    this.navigate(urlWithOptionalHash);
  }

  render() {
    const props = {
      ...this.props,
      navigate: this.navigate,
      onClick: this.onClick,
    };
    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
}

if (process.env.NODE_ENV !== 'production') {
  CaptureClicks.propTypes = {
    children: React.PropTypes.node.isRequired,
    onClick: React.PropTypes.func,
  };
}
