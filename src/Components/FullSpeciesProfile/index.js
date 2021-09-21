import React from 'react';
import NavBar from '../NavBar';
import {SpeciesData} from '../SpeciesCard/SpeciesData';
import style from './styles.module.css';

function FullSpeciesProfile(props) {
  console.log({props});
  const animal = SpeciesData.find(({id}) => id === props.match.params.id);
  return (
    <div className={style.mainFullProfile}>
      <NavBar />
      <h1>{animal.commonName}</h1>
      <h2>{animal.scienceName}</h2>
      <img src={animal.profileImage} alt="profile" />
      <p>{animal.description}</p>
    </div>
  );
}

export default FullSpeciesProfile;
