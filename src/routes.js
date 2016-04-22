import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import NotFoundHandler from './not-found-handler';
import HomepageWithData from './homepage';
import ArticleWithData from './article';

export default ((
  <Route path="/" component={App}>
    <IndexRoute component={HomepageWithData} />
    <Route path="article/:id" component={ArticleWithData} />
    <Route path="article/:id/:slug" component={ArticleWithData} />
    <Route path="*" component={NotFoundHandler} />
  </Route>
));
