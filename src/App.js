import React from "react";
import NavBar from "./Components/NavBar";
import HeroVideo from "./Components/HeroVideo";
import style from "./styles.module.css";
import AnimalDescriptionComponent from "./Components/AnimalDescriptionComponent";

function App() {
  return (
    <main className={style.app}>
      <NavBar />
      <HeroVideo />
      <AnimalDescriptionComponent />
    </main>
  );
}

export default App;
