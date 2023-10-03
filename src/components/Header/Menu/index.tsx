import { v4 as uuidv4 } from 'uuid';
import { MouseEventHandler } from 'react';
import ItemMenu from './ItemMenu';
import Burger from '../../UI/Burger';
import styles from './style.module.scss';

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

const Menu = (props: {
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLElement>;
}) => {
  const { isOpen, onClick } = props;

  return (
    <div className={`${isOpen ? styles.active : styles.menu}`}>
      {isOpen && <Burger isOpen={isOpen} onClick={onClick} />}
      {menuItems.map((i) => {
        const key = uuidv4();
        return <ItemMenu text={i} key={key} id={key} />;
      })}
    </div>
  );
};

export default Menu;
