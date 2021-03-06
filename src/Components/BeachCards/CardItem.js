import React from 'react';
import styles from './styles.module.css';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';

function CardItem(props) {
  const history = useHistory();
  return (
    <>
      <li className={styles.cardsItem}>
        <Link
          className={styles.cardsItemLink}
          onClick={() => {
            history.push(`/spotprofile/${props.text}`);
          }}
        >
          <figure className={styles.cardsItemPicWrap} data-category={props.label}>
            <img className={styles.cardsItemImg} alt="Travel pic" src={props.src} />
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
