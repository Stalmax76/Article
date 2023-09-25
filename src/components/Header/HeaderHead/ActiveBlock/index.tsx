import { MouseEventHandler } from 'react';
import styles from './styles.module.scss';
import Burger from '../../../UI/Burger';
import Search from '../../../UI/Search';
import Weather from '../../../UI/Weather/';

function ActiveBlock(props: {
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLElement>;
}) {
  const { isOpen, onClick } = props;
  return (
    <div className={styles.activeBlock}>
      <Burger isOpen={isOpen} onClick={onClick} />
      <Search />
      <Weather />
    </div>
  );
}
export default ActiveBlock;
