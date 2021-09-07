import React from 'react';
import {SpeciesData} from '../SpeciesCard/SpeciesData';

function FullSpeciesProfile(props) {
  console.log({props});
  const animal = SpeciesData.find(({id}) => id === props.match.params.id);
  return (
    <div>
      <h1>{animal.commonName}</h1>
      <h2>{animal.scienceName}</h2>
      <p>hello</p>
    </div>
  );
}

export default FullSpeciesProfile;
