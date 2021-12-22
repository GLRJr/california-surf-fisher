import React from 'react';
import NavBar from '../NavBar';
import {beachData} from '../../BeachInfo/beachData';
import style from './styles.module.css';

function FullBeachProfile(props) {
  console.log({props});
  const animal = beachData.find(({id}) => id === props.match.params.id);
  return (
    <div className={style.mainFullProfile}>
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
    </div>
  );
}

export default FullBeachProfile;
