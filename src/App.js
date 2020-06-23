import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import MovieApp from './components/pages/MovieApp';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='container'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={MovieApp} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
