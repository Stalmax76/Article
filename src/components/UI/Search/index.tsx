import styles from './style.module.scss';
import iconUrl from '../../../assets/img/icons/search.svg';
function Search() {
  return (
    <div className={styles.search}>
      <img src={iconUrl} alt="icon" />
    </div>
  );
}
export default Search;
