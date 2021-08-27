import React from 'react';
import style from './styles.module.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import Rigs from './Screens/RigsScreen';
import LocationsScreen from './Screens/LocationsScreen';
import FishScreen from './Screens/FishScreen';

function App() {
  return (
    <Router>
      <main className={style.app}>
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path="/rigs">
            <Rigs />
          </Route>
          <Route path="/locations">
            <LocationsScreen />
          </Route>
          <Route path="/fish">
            <FishScreen />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
