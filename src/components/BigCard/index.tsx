import Title from '../UI/Title';
import Date from '../UI/Date';
import type { ICard } from '@types';
import styles from './style.module.scss';

function BigCard(card: ICard) {
  const { imgUrl, title, text, date } = card;
  return (
    <article className={styles.bigCard}>
      <div className={styles.bigCard__img}>
        <img src={imgUrl} alt="photo" />
      </div>
      <div className={styles.bigCard__content}>
        <div className={styles.bigCard__title}>
          <Title text={title} />
        </div>
        <div className={styles.bigCard__text}>{text}</div>
        <div className={styles.bigCard__date}>
          <Date date={date} />
        </div>
      </div>
    </article>
  );
}

export default BigCard;
