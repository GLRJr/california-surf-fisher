import React from 'react';
import NavBar from '../NavBar';
import {beachData} from '../../BeachDatabase/beachData';
import style from './styles.module.css';

function FullBeachProfile(props) {
  console.log({props});
  const spot = beachData.find(({id}) => id === props.match.params.id);
  return (
    <main className={style.mainFullProfile}>
      <NavBar />
      {/* i want to add a swipe photo gallery */}
      <img src={spot.profileImage} alt="profile" />
      <h1>{spot.id}</h1>
      {/* <h3>({spot.scienceName})</h3> */}
      {/* <h4>Description</h4>
      <p>{spot.longDescription}</p> */}
      <h4>Popular Beaches</h4>
      <p>{spot.popularBeach}</p>
      <h4>Piers</h4>
      <p>{spot.pier.title}</p>
      <p>{spot.pier.description}</p>
      <p>{spot.pier.location}</p>
      <h4>Sources</h4>
      <p>{spot.source}</p>
    </main>
  );
}

export default FullBeachProfile;
