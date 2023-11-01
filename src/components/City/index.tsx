import BigCard from 'components/BigCard';
import BlockCardsWithPhoto from 'components/BlockCardsWithPhoto';
import BlockCardsText from 'components/BlockCardsText';
import styles from './style.module.scss';

function City() {
  return (
    <section className={styles.city}>
      <div className={styles.city__cardsWithPhoto}>
        <BlockCardsWithPhoto />
      </div>
      <div className={styles.city__bigCard}>
        <BigCard
          imgUrl={bigCardUrl}
          title={bigCardTitle}
          date={bigCardDate}
          text={bigCardText}
        />
      </div>
      <div className={styles.city__cardsText}>
        <BlockCardsText />
      </div>
    </section>
  );
}
export default City;

// data for BigCard
import bigCardUrl from '../../assets/img/city/Big04.jpg';

const bigCardTitle =
  'У Вінниці на території зоопарку створили романтичну фотозону';
const bigCardText =
  'До Дня закоханих Подільський зоопарк відкрив для відвідувачів романтичну фотозону. Нову фотолокацію розмістили біля Садиби Подільського чарівника. «Гадаємо, цей романтичний куточок стане улюбленим місцем тих, у чиїх серцях живе любов. Відвідати фотолокацію можна 12, 13 та 14 лютого. До Дня закоханих на гостину до Подільського зоопарку завітав і Купідон, чиї золоті стріли, як відомо, здатні викликати любов.';
const bigCardDate = '12 лютого 2022, 14:08';
