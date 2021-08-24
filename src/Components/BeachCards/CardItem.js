import React from 'react';
import styles from './styles.module.css';
import {Link} from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className={styles.cardsItem}>
        <Link className={styles.cardsItemLink} to={props.path}>
          <figure className={styles.cardsItemPicWrap} data-category={props.label}>
            <img className={styles.cardsItemImg} alt="Travel Image" src={props.src} />
          </figure>
          <div className={styles.cardsItemInfo}>
            <h5 className={styles.cardsItemText}>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
