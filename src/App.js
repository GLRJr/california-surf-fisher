import React from 'react';
import style from './styles.module.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import Rigs from './Screens/RigsScreen';
import LocationsScreen from './Screens/LocationsScreen';
import FishScreen from './Screens/FishScreen';
import FullSpeciesProfile from './Components/FullSpeciesProfile';
import CardItem from './Components/BeachCards/CardItem';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
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
          <Route path="/fishprofile/:id" component={FullSpeciesProfile} />
          <Route path="/spotprofile/:id" component={CardItem} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
