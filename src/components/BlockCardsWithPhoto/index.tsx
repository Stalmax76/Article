import CardWithPhoto from 'components/CardWithPhoto';
import styles from './style.module.scss';

function BlockCardsWithPhoto() {
  return (
    <section className={styles.blockCardsWithPhoto}>
      <CardWithPhoto
        imgUrl={imgUrl_1}
        title={textTitle_1}
        text={textContent_1}
        date={date_1}
      />
      <CardWithPhoto
        imgUrl={imgUrl_2}
        title={textTitle_2}
        text={textContent_2}
        date={date_2}
      />
      <CardWithPhoto
        imgUrl={imgUrl_3}
        title={textTitle_3}
        text={textContent_3}
        date={date_3}
      />
    </section>
  );
}

export default BlockCardsWithPhoto;

// --- data for cards with phoro ------
import imgUrl_1 from '../../assets/img/city/01.jpg';
import imgUrl_2 from '../../assets/img/city/02.jpg';
import imgUrl_3 from '../../assets/img/city/03.jpg';

const textTitle_1 =
  'Вінницький спортсмен став Чемпіоном України з кульової стрільби';
const textTitle_2 =
  'У територіальній обороні має бути до двох мільйонів громадян';
const textTitle_3 =
  'На Вінниччині подружжя побудувало двоповерховий будинок із солом’яних тюків';
const textContent_1 =
  'Вінницький спортсмен Олег Царьков виборов золоту медаль на Чемпіонаті України з кульової стрільби.';
const textContent_2 =
  'В Україні планують збільшити чисельність осіб у складі Сил територіальної оборони ЗСУ, а кількість членів територіальної...';
const textContent_3 =
  'Вже більше 8 років подружжя Олени та Олександра Кушпітів з села...';
const date_1 = '12.02.2022, 09:46';
const date_2 = '12.02.2022, 09:37';
const date_3 = '11.02.2022, 17:00';
