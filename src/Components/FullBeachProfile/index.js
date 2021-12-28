import React from 'react';
import NavBar from '../NavBar';
import {beachData} from '../../BeachDatabase/beachData';
import style from './styles.module.css';

function FullBeachProfile(props) {
  console.log({props});
  const spot = beachData.find(({id}) => id === props.match.params.id);
  return (
    <div className={style.mainFullProfile}>
      <NavBar />
      {/* i want to add a swipe photo gallery */}
      <img src={spot.profileImage} alt="profile" />
      <h1>{spot.commonName}</h1>
      <h3>({spot.scienceName})</h3>
      <h4>Description</h4>
      <p>{spot.longDescription}</p>
      <h4>Tips on catching</h4>
      <p>{spot.catchMethod}</p>
      <h4>Regulation</h4>
      <p>{spot.regulation}</p>
      <h4>Sources</h4>
      <p>{spot.source}</p>
    </div>
  );
}

export default FullBeachProfile;
