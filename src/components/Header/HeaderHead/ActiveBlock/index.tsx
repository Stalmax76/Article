import styles from './styles.module.scss';
import Burger from '../../../UI/Burger';
import Search from '../../../UI/Search';
import Weather from '../../../UI/Weather/';

function ActiveBlock() {
  return (
    <div className={styles.activeBlock}>
      <Burger />
      <Search />
      <Weather />
    </div>
  );
}
export default ActiveBlock;
