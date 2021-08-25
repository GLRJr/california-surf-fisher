import React from 'react';
// import NavBar from './Components/NavBar';
// import HeroVideo from './Components/HeroVideo';
import style from './styles.module.css';
// import MapComponent from './Components/MapComponent';
// import AnimalDescriptionComponent from './Components/AnimalDescriptionComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomeScreen from './Components/HomeScreen';

function App() {
  return (
    <Router>
      <main className={style.app}>
        <Switch>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
