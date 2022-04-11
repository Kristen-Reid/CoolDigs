import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import SpotsForm from './components/SpotsPage/SpotsForm';
import SpotsPage from './components/SpotsPage';
import SpotDetail from './components/SpotDetails';
import EditSpotDetails from './components/EditSpotDetails';
import { getSpots } from './store/spots';


const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
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
        { user !== undefined ?
          <Route exact path='/spots'>
            <SpotsPage />
          </Route> :
          <Route>
            <HomePage />
          </Route> }
        <Route path='/spots/new'>
          <SpotsForm />
        </Route>
        <Route exact path='/spots/:id'>
          <SpotDetail />
        </Route>
        <Route path='/spots/:id/edit'>
          <EditSpotDetails />
        </Route>
      </Switch>
    </>
  );
}


export default App;
