import Title from '../UI/Title/';
import Date from '../UI/Date';

import styles from './styles.module.scss';

function CardWithPhoto({
  imgUrl,
  textTitle,
  textContent,
  date,
}: {
  imgUrl: string;
  textTitle: string;
  textContent: string;
  date: string;
}) {
  return (
    <article className={styles.cardWithPhoto}>
      <div className={styles.cardWithPhoto__img}>
        <img src={imgUrl} />
      </div>
      <div className={styles.cardWithPhoto__content}>
        <Title text={textTitle} />
        <div className={styles.cardWithPhoto__text}>
          <p>{textContent}</p>
        </div>
        <Date date={date} />
      </div>
    </article>
  );
}

export default CardWithPhoto;
