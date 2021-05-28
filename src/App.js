import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import TaskDetail from './components/tasks/TaskDetail';
import Header from './components/layouts/Header';
import Home from './components/layouts/Home';
import NotFound from './components/layouts/NotFound';
import About from './components/pages/About';
import Articles from './components/articles/Articles';
import Users from './components/users/Users';
import UserDetail from './components/users/UserDetail';
import Footer from './components/layouts/Footer';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Header title={'My Web Company'} />
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route path={'/about'} component={About} />
          <Route exact path={'/users'} component={Users} />
          <Route exact path={'/users/:id'} component={UserDetail} />
          <Route path={'/blog'} component={Articles} />
          <Route path={'/task/:id'} component={TaskDetail} />
          <Route component={NotFound} />
        </Switch>
        <Footer text={`EvilWeb ${new Date().toLocaleDateString()}`} />
      </Router>
    </Fragment>
  );
};

export default App;
