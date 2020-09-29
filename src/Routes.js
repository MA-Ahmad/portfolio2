import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Articles from './components/Articles';
import OpenSource from './components/OpenSource';
import Projects from './components/Projects';
import Header from './Header';
import Footer from './Footer';

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/open-source" component={OpenSource} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
