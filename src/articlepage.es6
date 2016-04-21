import React from 'react';
import pageTracker from '@economist/react-i13n-omniture/lib/pagetracker';
import Impart from '@economist/component-react-async-container';
import cache from '@economist/component-react-async-container/cache';
import fetch from 'isomorphic-fetch';
import handleLoading from './loading-handler';
import handleFailure from './failure-handler';

function fetchArticle({ id }) {
  return fetch(`/api/article/${ id }`).then((response) => (response.json()));
}

function cacheArticle({ id }) {
  return cache(`/api/article/${ id }`);
}

export function ArticlePage() {
  return (
    <h1>Article page</h1>
  );
}

const TrackedArticlePage = pageTracker(ArticlePage, {
  template: 'article',
  topic(component) {
    return component.props.sectionName;
  },
  publishDate(component) {
    return new Date(Date.parse(component.props.publishDate.raw));
  },
});
export default function ArticlePageWithData(props) {
  props = {
    ...props,
    id: props.params.id,
  };
  return (
    <Impart.RootContainer
      {...props}
      Component={TrackedArticlePage}
      cache={cacheArticle}
      route={fetchArticle}
      renderLoading={handleLoading}
      renderFailure={handleFailure}
    />
  );
}

if (process.env.NODE_ENV !== 'production') {
  ArticlePageWithData.propTypes = {
    params: React.PropTypes.shape({
      id: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string,
      ]).isRequired,
    }),
  };
}
