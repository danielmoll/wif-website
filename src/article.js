import React from 'react';
import ArticleTemplate from '@economist/component-articletemplate';
import ArticleBody from './article-body';
import ArticleFooter from './article-footer';
import ArticleHeader from './article-header';
import ArticleSubHeader from './article-subheader';
import Impart from '@economist/component-react-async-container';
import cache from '@economist/component-react-async-container/cache';
import fetch from 'isomorphic-fetch';
import handleFailure from './failure-handler';
import handleLoading from './loading-handler';
import pageTracker from '@economist/react-i13n-omniture/lib/pagetracker';

function fetchArticle({ id }) {
  return fetch(`/api/article/${ id }`).then((response) => (response.json()));
}

function cacheArticle({ id }) {
  return cache(`/api/article/${ id }`);
}

function Article(rest) {
  const props = {
    components: {
      ArticleHeader,
      ArticleSubHeader,
      ArticleBody,
      ArticleFooter,
    },
    ...rest,
  };
  return (
    <ArticleTemplate {...props} />
  );
}

const TrackedArticlePage = pageTracker(Article, {
  template: 'article',
  topic(component) {
    return component.props.sectionName;
  },
  publishDate(component) {
    return new Date(Date.parse(component.props.publishDate.raw));
  },
});
export default function ArticleWithData(props) {
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
  ArticleWithData.propTypes = {
    params: React.PropTypes.shape({
      id: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string,
      ]).isRequired,
    }),
  };
}
