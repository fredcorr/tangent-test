import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FavouriteList from './containers/FavouriteList';
import { AnimatePresence } from 'framer-motion';
import Movie from './containers/Movie';
import Layout from './components/Layout';
import Home from './containers/Home';
import React from 'react';
import './App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
      <AnimatePresence exitBeforeEnter>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/your-list' component={ FavouriteList } />
            <Route path='/movie-card/:slug' component={ Movie } />
        </Switch>
      </AnimatePresence>
    </Layout>
  </Router>
  );
}

export default App;
