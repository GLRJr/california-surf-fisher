import React from 'react';
import styles from './styles.module.css';
//import {useHistory} from 'react-router-dom';
import {beachData} from '../../BeachInfo/beachData';
import CardItem from './CardItem';

function BeachCards() {
  let homepageCardsBig = [];
  let homepageCardsSmall = [];

  for (let i in beachData) {
    if (i < 2) {
      homepageCardsBig.push(beachData[i]);
    }
    console.log(homepageCardsBig.length);
  }

  for (let i in beachData) {
    if (i > 2 && i < 6) {
      homepageCardsSmall.push(beachData[i]);
    }
    console.log(homepageCardsSmall.length);
  }

  return (
    <div className={styles.cards}>
      <h1>Popular Spots in the Santa Monica Bay</h1>
      <div className={styles.cardsContainer}>
        <div className={styles.cardsWrapper}>
          <ul className={styles.cardsItems}></ul>
          <ul className={styles.cardsItems}>
            {homepageCardsBig.map((item, index) => {
              return (
                <CardItem
                  key={index}
                  src={item.photo}
                  text={item.id}
                  label="Pier"
                  // path="/services"
                />
              );
            })}
          </ul>
          <ul className={styles.cardsItems}>
            {homepageCardsSmall.map((item, index) => {
              return (
                <CardItem
                  key={index}
                  src={item.photo}
                  text={item.id}
                  label={item.label}
                  // path="/services"
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BeachCards;
