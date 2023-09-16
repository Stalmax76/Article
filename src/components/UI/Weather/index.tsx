import styles from './style.module.scss';
import iconUrl from '../../../assets/img/icons/cloud.svg';

function Weather() {
  return (
    <div className={styles.weather}>
      <div className={styles.weather__status}></div>
      <div className={styles.weather__icon}>
        <img src={iconUrl} alt="icon-weather" />
      </div>
      <div className={styles.weather__temperature}>
        15 <span>&#176;</span>C
      </div>
    </div>
  );
}
export default Weather;
