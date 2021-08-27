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
      <AnimalDescriptionComponent />
      <MapComponent />
    </main>
  );
}

export default HomeScreen;
