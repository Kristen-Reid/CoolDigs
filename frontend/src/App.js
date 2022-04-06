import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import SpotsForm from './components/SpotsPage/SpotsForm';
import SpotsPage from './components/SpotsPage';
import SpotDetail from './components/SpotDetails';
import { getSpots } from './store/spots';


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(getSpots());
  }, [dispatch]);


  return (
     <>
      <Navigation isLoaded={isLoaded} />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/spots'>
          <SpotsPage />
        </Route>
        <Route path='/spots/new'>
          <SpotsForm />
        </Route>
        <Route path='/spots/:id'>
          <SpotDetail />
        </Route>
      </Switch>
    </>
  );
}


export default App;
