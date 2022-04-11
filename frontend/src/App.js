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
import Footer from './components/Footer';
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
        <Route exact path='/spots/new'>
          <SpotsForm />
        </Route>
        <Route exact path='/spots/:id'>
          <SpotDetail />
        </Route>
        <Route exact path='/spots/:id/edit'>
          <EditSpotDetails />
        </Route>
        <Route>
          <div className='pageNotFoundContainer'>
            <h1 className='pageNotFound'>PAGE NOT FOUND</h1>
          </div>
        </Route>
      </Switch>
      <div className='footerApp'>
        <Footer/>
      </div>
    </>
  );
}


export default App;
