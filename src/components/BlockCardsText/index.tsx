import { v4 as uuidv4 } from 'uuid';
import CardText from 'components/CardText';
import styles from './styles.module.scss';
import { dataCardsText } from '../../Data/startInfo';

function BlockCardsText() {
  return (
    <section className={styles.blockCardsText}>
      {dataCardsText.map((item) => {
        const key = uuidv4();
        return <CardText title={item.title} date={item.date} key={key} />;
      })}
    </section>
  );
}

export default BlockCardsText;
