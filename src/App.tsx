import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FavouriteList from './containers/FavouriteList'; 
import Movie from './containers/Movie';
import Layout from './components/Layout';
import Search from './containers/Search';
import React from 'react';
import './App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={ Search } />
          <Route exact path="/my-list" component={ FavouriteList } />
          <Route path="/film-card/:slug" render={ ( props ) => ( <Movie key={props.match.params.slug } { ...props } /> ) } />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
