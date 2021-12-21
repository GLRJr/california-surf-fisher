import React from 'react';
import NavBar from '../../Components/NavBar';
import HeroVideo from '../../Components/HeroVideo';
import style from './styles.module.css';
import MapComponent from '../../Components/MapComponent';
import BeachCards from '../../Components/BeachCards';
import AnimalDescriptionComponent from '../../Components/AnimalDescriptionComponent';
import {useHistory} from 'react-router-dom';

function HomeScreen() {
  const history = useHistory();

  return (
    <main className={style.app}>
      <NavBar />
      <HeroVideo />
      <BeachCards />
      <h2>Commonly Caught Species</h2>
      <AnimalDescriptionComponent />
      <button
        onClick={() => {
          history.push('/fish');
        }}
      >
        See Full List
      </button>
      <MapComponent />
    </main>
  );
}

export default HomeScreen;
