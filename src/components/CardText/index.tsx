import Date from 'components/UI/Date';
import Title from 'components/UI/Title';
import styles from './style.module.scss';
import { ICard } from '@types';

function CardText(card: ICard) {
  const { date, title } = card;
  return (
    <article className={styles.cardText}>
      <Date date={date} />
      <Title text={title} />
    </article>
  );
}

export default CardText;
