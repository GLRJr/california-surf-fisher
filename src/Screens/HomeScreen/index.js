import React from 'react';
import NavBar from '../../Components/NavBar';
import HeroVideo from '../../Components/HeroVideo';
import style from './styles.module.css';
import MapComponent from '../../Components/MapComponent';
import BeachCards from '../../Components/BeachCards';
import AnimalDescriptionComponent from '../../Components/AnimalDescriptionComponent';

function HomeScreen() {
  return (
    <main className={style.app}>
      <NavBar />
      <HeroVideo />
      <BeachCards />
      <h2>Commonly Caught Species</h2>
      <AnimalDescriptionComponent />
      <button>See Full List</button>
      <MapComponent />
    </main>
  );
}

export default HomeScreen;
