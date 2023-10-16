import City from '../City';
import styles from './style.module.scss';
function Pages() {
  return (
    <div className={styles.pages}>
      <div className={styles.pages__container}>
        <City />
      </div>
    </div>
  );
}

export default Pages;
