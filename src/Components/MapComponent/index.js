import React from 'react';
import style from './styles.module.css';

function MapComponent() {
  return (
    <div className={style.mainContainer}>
      <iframe
        frameborder="0"
        src="https://takemefishing.org/share/"
        target="_blank"
        scrolling="no"
        bgcolor="#C9D3DE"
        allow="geolocation"
      ></iframe>
    </div>
  );
}

export default MapComponent;
