import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
