import React from 'react';
import { IndexRoute, Route } from 'react-router';
import Layout from './components/Layout';
import IndexPage from './components/Index';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import PortfolioPage from './components/PortfolioPage';
import NotFoundPage from './components/NotFoundPage';


const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
     <Route path="/About" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="Project/:id" component={PortfolioPage}/>
      <Route path="*" component={NotFoundPage} />
  </Route>
);


export default routes;
