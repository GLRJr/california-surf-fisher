import React from 'react';
import styles from './styles.module.css';
//import {useHistory} from 'react-router-dom';
import CardItem from './CardItem';
import venicePier from '../../assets/venicefishingpier.jpg';
import redondoPier from '../../assets/Redondobeachpier.jpg';
import santaMonicaPier from '../../assets/santaMonicaPier.jpg';
import manhattanBeachPier from '../../assets/manhattanBeachPier.jpg';
import willRodgersStateBeach from '../../assets/willRodgersStateBeach.jpg';

function BeachCards() {
  return (
    <div className={styles.cards}>
      <h1>Popular Spots in the Santa Monica Bay</h1>
      <div className={styles.cardsContainer}>
        <div className={styles.cardsWrapper}>
          <ul className={styles.cardsItems}>
            <CardItem src={redondoPier} text="Redondo Beach Pier" label="Pier" path="/services" />
            <CardItem src={venicePier} text="Venice Fishing Pier" label="Pier" path="/" />
          </ul>
          <ul className={styles.cardsItems}>
            <CardItem
              src={santaMonicaPier}
              text="Santa Monica Pier"
              label="Pier"
              path="/services"
            />
            <CardItem
              src={willRodgersStateBeach}
              text="Will Rodgers State Beach"
              label="Surf"
              path="/products"
            />
            <CardItem
              src={manhattanBeachPier}
              text="Manhattan Beach Pier"
              label="Pier"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BeachCards;
