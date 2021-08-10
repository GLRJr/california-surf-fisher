import React from "react";
import bgVideo from "../../assets/bgVideo.mp4";
import style from "./styles.module.css";

function HeroVideo() {
  return (
    <div className={style.heroMain}>
      <video className={style.heroPlayer} loop autoPlay muted>
        <source src={bgVideo} type="video/mp4" />
        <source src={bgVideo} type="video/oog" />
      </video>
    </div>
  );
}

export default HeroVideo;
