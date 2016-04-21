import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import NotFoundHandler from '@economist/component-404';
import HomePageHandler from './homepage';
import ArticlePageHandler from './articlepage';

export default ((
  <Route path="/" component={App}>
    <IndexRoute component={HomePageHandler} />
    <Route path="article/:id" component={ArticlePageHandler} />
    <Route path="article/:id/:slug" component={ArticlePageHandler} />
    <Route path="*" component={NotFoundHandler} />
  </Route>
));
