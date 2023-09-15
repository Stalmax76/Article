import { v4 as uuidv4 } from 'uuid';
import styles from './style.module.scss';
import ItemMenu from './ItemMenu';

const menuItems = [
  'Місто',
  'Економіка',
  'Персоналії',
  'Влада',
  'Події',
  'Культура',
  'Спорт',
  'Політика',
  'Інше',
];

const Menu = () => {
  return (
    <div className={styles.menu}>
      {menuItems.map((i) => {
        const key = uuidv4();
        return <ItemMenu text={i} key={key} id={key} />;
      })}
    </div>
  );
};

export default Menu;
