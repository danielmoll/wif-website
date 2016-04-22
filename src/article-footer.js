import React from 'react';

function createMarkup(content) {
  return { __html: content }; //eslint-disable-line
}

function element({
  content = null,
  className = '',
  useDanger = false,
}) {
  let html = null;
  if (content) {
    if (useDanger) {
      html = (
        <span
          className={className}
          dangerouslySetInnerHTML={createMarkup(content)} //eslint-disable-line
        />
      );
    } else {
      html = (
        <span className={className}>
          {content}
        </span>
      );
    }
  }

  return html;
}

export default function ArticleFooter({
  byline,
  bylineLocation,
  bio,
}) {
  return (
    <footer className="article-template__footer">
      {element({
        content: byline,
        className: 'article-template__byline',
      })}
      {element({
        content: bylineLocation,
        className: 'article-template__byline-location',
      })}
      {element({
        content: bio,
        className: 'article-template__bio',
        useDanger: true,
      })}
    </footer>
  );
}

if (process.env.NODE_ENV !== 'production') {
  ArticleFooter.propTypes = {
    byline: React.PropTypes.string,
    bylineLocation: React.PropTypes.string,
    bio: React.PropTypes.string,
  };
}
