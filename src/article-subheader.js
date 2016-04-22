import React from 'react';

export default function ArticleSubHeader({
  rubric,
  publishDate,
}) {
  return (
    <div className="article-template__subheader">
      <time
        itemProp="publishDate"
        dateTime={publishDate.raw}
        className="article-template__pubdate"
      >
        {publishDate.formatted}
      </time>
      <div
        itemProp="rubric"
        className="article-template__rubric"
      >
        {rubric}
      </div>
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  ArticleSubHeader.propTypes = {
    rubric: React.PropTypes.string,
    publishDate: React.PropTypes.shape({
      raw: React.PropTypes.string,
      formatted: React.PropTypes.string,
    }),
  };
}
