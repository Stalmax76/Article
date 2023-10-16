import styles from './style.module.scss';

function Title({ text }: { text: string }) {
  return <h3 className={styles.title}>{text}</h3>;
}

export default Title;
