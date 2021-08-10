import React from "react";
import SpeciesCard from "../SpeciesCard";
import style from "./styles.module.css";

function AnimalDescriptionComponent() {
  return (
    <div className={style.contactsMain}>
      <SpeciesCard />
    </div>
  );
}

export default AnimalDescriptionComponent;
