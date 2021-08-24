import React from 'react';
import styles from './styles.module.css';
import CardItem from './CardItem';

function BeachCards() {
  return (
    <div className={styles.cards}>
      <h1>Top Surf Fishing Locations</h1>
      <div className={styles.cardsContainer}>
        <div className={styles.cardsWrapper}>
          <ul className={styles.cardsItems}>
            <CardItem
              src="./src/assets/beach-1.jpeg"
              text="Classic Redondo Beach Pier"
              label="Pier"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Legendary Huntinton Beach"
              label="Surf"
              path="/services"
            />
          </ul>
          <ul className={styles.cardsItems}>
            <CardItem
              src="images/img-3.jpg"
              text="Historic Santa Monica Pier"
              label="Pier"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Relaxing Will Rodgers State Beach"
              label="Jetty"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Beautiful Manhatten Beach"
              label="Jetty"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BeachCards;
