import Title from '../UI/Title/';
import Date from '../UI/Date';
import type { ICard } from '@types';

import styles from './styles.module.scss';

function CardWithPhoto(card: ICard) {
  const { title, imgUrl, text, date } = card;
  return (
    <article className={styles.cardWithPhoto}>
      <div className={styles.cardWithPhoto__img}>
        <img src={imgUrl} />
      </div>
      <div className={styles.cardWithPhoto__content}>
        <Title text={title} />
        <div className={styles.cardWithPhoto__text}>
          <p>{text}</p>
        </div>
        <Date date={date} />
      </div>
    </article>
  );
}

export default CardWithPhoto;
