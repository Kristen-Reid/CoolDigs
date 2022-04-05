import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import SpotsForm from './components/SpotsPage';
import SpotsPage from './components/SpotsPage';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
     <>
      <Navigation isLoaded={isLoaded} />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/spots'>
          <SpotsPage />
        </Route>
      </Switch>
    </>
  );
}


export default App;
