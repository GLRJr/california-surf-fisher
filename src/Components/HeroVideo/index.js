import React from 'react';
import bgVideo from '../../assets/bgVideo.mp4';
import style from './styles.module.css';
// import posterImg from '../../assets/bat-ray.jpeg';

function HeroVideo() {
  return (
    <main className={style.heroMain}>
      <video className={style.heroPlayer} /*poster={posterImg}*/ loop autoPlay muted>
        <source src={bgVideo} type="video/mp4" />
        <source src={bgVideo} type="video/oog" />
      </video>
      {/* <h1>ADVENTURE AWAITS</h1> */}
      {/* <p>Sign Up Today</p> */}
    </main>
  );
}

export default HeroVideo;
