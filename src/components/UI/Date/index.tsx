import styles from './styles.module.scss';

function Date({ date }: { date: string }) {
  return <div className={styles.date}>{date}</div>;
}

export default Date;
