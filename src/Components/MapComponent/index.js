import React from 'react';
import style from './styles.module.css';

function MapComponent() {
  return (
    <main className={style.mainContainer}>
      <iframe
        frameBorder="0"
        src="https://takemefishing.org/share/"
        target="_blank"
        scrolling="no"
        bgcolor="#C9D3DE"
        allow="geolocation"
        title="Fishing spot locator"
      ></iframe>
    </main>
  );
}

export default MapComponent;
