import React from 'react';
import styles from './styles.module.css';
import CardItem from './CardItem';
import beachPic from '../../assets/beach-1.jpeg';

function BeachCards() {
  return (
    <div className={styles.cards}>
      <h1>Top Surf Fishing Locations</h1>
      <div className={styles.cardsContainer}>
        <div className={styles.cardsWrapper}>
          <ul className={styles.cardsItems}>
            <CardItem
              src={beachPic}
              text="Classic Redondo Beach Pier"
              label="Pier"
              path="/services"
            />
            <CardItem
              src={beachPic}
              text="Legendary Huntinton Beach"
              label="Surf"
              path="/services"
            />
          </ul>
          <ul className={styles.cardsItems}>
            <CardItem
              src={beachPic}
              text="Historic Santa Monica Pier"
              label="Pier"
              path="/services"
            />
            <CardItem
              src={beachPic}
              text="Relaxing Will Rodgers State Beach"
              label="Jetty"
              path="/products"
            />
            <CardItem
              src={beachPic}
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
