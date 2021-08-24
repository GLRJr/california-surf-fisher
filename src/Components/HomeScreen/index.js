import React from 'react';
import NavBar from '../NavBar';
import HeroVideo from '../HeroVideo';
import style from './styles.module.css';
import MapComponent from '../MapComponent';
import BeachCards from '../BeachCards';
import AnimalDescriptionComponent from '../AnimalDescriptionComponent';

function HomeScreen() {
  return (
    <main className={style.app}>
      <NavBar />
      <HeroVideo />
      <BeachCards />
      <AnimalDescriptionComponent />
      <MapComponent />
    </main>
  );
}

export default HomeScreen;
