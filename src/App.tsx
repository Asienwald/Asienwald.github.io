import React, { useEffect } from 'react';
import {HashRouter as Router, Switch, Route, Link, Redirect, useLocation} from 'react-router-dom';
import './App.css';

// pages
import HomePage from './components/pages/home';
import NotFound from './components/pages/notfound';
import WorldMapPage from './components/pages/worldmap';
import AboutMePage from './components/pages/aboutme';
import EducationPage from './components/pages/education'
import ExperiencePage from './components/pages/experience';
import Environment from './components/common/environment';
import AchievemmentsPage from './components/pages/achievements';

import Player from './components/common/player'
import { useDispatch } from 'react-redux';
import { AllActions } from './actions';
import AchievementsModal from './components/pages/achievements/achievementsmodal';


const LocationManager: React.FC = () => {
  const location = useLocation()
  const dispatch = useDispatch();

  const changeMovingEnv = (moving: boolean, playerCenter: boolean, playerInvert: boolean) => {
    dispatch(AllActions.EnvActions.changeMoving(moving));
    dispatch(AllActions.EnvActions.setPlayerCenter(playerCenter));
    dispatch(AllActions.EnvActions.setPlayerInvert(playerInvert));
  }

  useEffect(() => {
    console.log(location.pathname)
    switch(location.pathname){
      case "/":
        console.log("its root!")
        changeMovingEnv(true, true, false);
        dispatch(AllActions.EnvActions.setBackWorld(false));
        break;
      case "/worldmap":
        console.log("it's worldmap!");
        changeMovingEnv(false, false, true);
        dispatch(AllActions.EnvActions.setBackWorld(false));
        break;
      case "/aboutme": case "/education": case "/experience": case "/achievements":
        changeMovingEnv(true, false, false);
        dispatch(AllActions.EnvActions.setBackWorld(true));
        break;
      default:
        changeMovingEnv(false, true, true);
        dispatch(AllActions.EnvActions.setBackWorld(false));
    }
  }, [location])

  return (
    <div>
      
    </div>
  );
};

function App() {
  return (
    <div className="App">

      <Router basename={process.env.PUBLIC_URL}>
        <LocationManager/>
        <Switch>
            <Route
              exact = {true}
              path = "/"
              component = {HomePage}
            />
            <Route
              exact
              path = "/worldmap"
              component = {WorldMapPage}
            />
            <Route
              exact
              path = "/aboutme"
              component = {AboutMePage}
            />
            <Route
              exact
              path = "/education"
              component = {EducationPage}
            />
            <Route
              exact
              path = "/experience"
              component = {ExperiencePage}
            />
            <Route
              exact
              path = "/achievements"
              component = {AchievemmentsPage}
            />
            <Route
              component = {NotFound}
            />       
        </Switch>

        <Player/>

        <Environment/>

        {/* for modals */}
        <AchievementsModal/>

      </Router>

    </div>
  );
}

export default App;
