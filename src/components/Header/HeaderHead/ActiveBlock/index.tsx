import styles from './styles.module.scss';
import Burger from '../../../UI/Burger';
import Search from '../../../UI/Search';

function ActiveBlock() {
  return (
    <div className={styles.activeBlock}>
      <Burger />
      <Search />
    </div>
  );
}
export default ActiveBlock;
