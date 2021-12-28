import React from 'react';
import NavBar from '../../Components/NavBar';
import style from './styles.module.css';
import carolinaRig from '../../assets/Carolina-rig.jpg';
import sabikiRig from '../../assets/sabikiRig.jpeg';
import highLowRig from '../../assets/highLowRig.jpeg';

function Rigs() {
  return (
    <main className={style.mainContent}>
      <header>
        <NavBar />
        <h1>Common Rigs</h1>
      </header>
      <hr></hr>
      <article className={style.articleContent}>
        <section>
          <h4>Carolina Rig</h4>
          <img src={carolinaRig} alt="carolina rig" />
          <p> The Carolina Rig is the most popular rig for surcasters on the west coast</p>
          <ul>
            <strong>Parts</strong>
            <li>-Bead</li>
            <li>-Size 7 Swivel</li>
            <li>Leader Line</li>
            <li>-Egg Sinker/Low Profile Bullet Sinker</li>
          </ul>
        </section>
        <hr></hr>
        <section>
          <h4>Sabiki Rig</h4>
          <img src={sabikiRig} alt="sakibi rig" />
          <p> The Sabiki Rig is the most popular rig for bait fishing on the pier</p>
        </section>
        <hr></hr>
        <section>
          <h4>High-Low Rig</h4>
          <img src={highLowRig} alt="High-low rig" />
          <p> The Sabiki Rig is the most popular rig for bait fishing on the pier</p>
        </section>
      </article>
    </main>
  );
}

export default Rigs;
