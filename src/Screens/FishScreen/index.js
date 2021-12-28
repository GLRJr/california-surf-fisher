import React from 'react';
import NavBar from '../../Components/NavBar';
import {SpeciesData} from '../../Components/SpeciesCard/SpeciesData';
import style from './styles.module.css';
import {useHistory} from 'react-router-dom';

function FishScreen() {
  const history = useHistory();
  return (
    <main>
      <NavBar />
      <div className={style.cardContainer}>
        {SpeciesData.map((item, index) => {
          return (
            <div className={style.main}>
              <header className={style.upperContainer}>
                <div className={style.imageContainer}>
                  <img src={item.profileImage} alt="pic of fish" height="100px" width="100px" />
                </div>
              </header>
              <section className={style.lowerContainer}>
                <h3>{item.commonName}</h3>
                <h4>{item.scienceName}</h4>
                <p>{item.shortDescription}</p>

                <button
                  onClick={() => {
                    history.push(`/fishprofile/${item.id}`);
                  }}
                >
                  View Full Profile
                </button>
              </section>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default FishScreen;
