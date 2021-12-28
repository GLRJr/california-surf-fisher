import React from 'react';
import NavBar from '../NavBar';
import {SpeciesData} from '../SpeciesCard/SpeciesData';
import style from './styles.module.css';

function FullSpeciesProfile(props) {
  console.log({props});
  const animal = SpeciesData.find(({id}) => id === props.match.params.id);
  return (
    <main className={style.mainFullProfile}>
      <NavBar />
      {/* i want to add a swipe photo gallery */}
      <img src={animal.profileImage} alt="profile" />
      <h1>{animal.commonName}</h1>
      <h3>({animal.scienceName})</h3>
      <h4>Description</h4>
      <p>{animal.longDescription}</p>
      <h4>Tips on catching</h4>
      <p>{animal.catchMethod}</p>
      <h4>Regulation</h4>
      <p>{animal.regulation}</p>
      <h4>Sources</h4>
      <p>{animal.source}</p>
    </main>
  );
}

export default FullSpeciesProfile;
